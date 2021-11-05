import * as Yup from 'yup'
import { useState } from 'react'
import { useSnackbar } from 'notistack5'
import { Link as RouterLink } from 'react-router-dom'
import { useFormik, Form, FormikProvider } from 'formik'
import { Icon } from '@iconify/react'
import eyeFill from '@iconify/icons-eva/eye-fill'
import closeFill from '@iconify/icons-eva/close-fill'
import eyeOffFill from '@iconify/icons-eva/eye-off-fill'
// material
import {
  Link,
  Stack,
  Alert,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Typography,
} from '@material-ui/core'
import { LoadingButton } from '@material-ui/lab'
// routes
import { PATH_AUTH } from '../../../routes/paths'
// hooks
import useAuth from '../../../hooks/useAuth'
import useIsMountedRef from '../../../hooks/useIsMountedRef'
//
import { MIconButton } from '../../@material-extend'

// ----------------------------------------------------------------------

export default function LoginForm() {
  const { login } = useAuth()
  const isMountedRef = useIsMountedRef()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [showPassword, setShowPassword] = useState(false)

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        await login(values.email, values.password)
        enqueueSnackbar('Login success', {
          variant: 'success',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          ),
        })
        if (isMountedRef.current) {
          setSubmitting(false)
        }
      } catch (error) {
        console.error(error)
        resetForm()
        if (isMountedRef.current) {
          setSubmitting(false)
          setErrors({ afterSubmit: error.message })
        }
      }
    },
  })

  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
  } = formik

  const handleShowPassword = () => {
    setShowPassword((show) => !show)
  }

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit}</Alert>
          )}

          <Typography variant="h5" sx={{ margin: 0, fontWeight: '300' }}>
            Username <span style={{ color: '#364e9b' }}>*</span>
          </Typography>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Enter your first name"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            sx={{ marginTop: '10px !important' }}
          />

          <Typography
            variant="h5"
            sx={{ margin: 0, marginTop: '5px !important', fontWeight: '300' }}
          >
            Password <span style={{ color: '#364e9b' }}>*</span>
          </Typography>
          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Enter your subject"
            {...getFieldProps('password')}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            sx={{ marginTop: '10px !important' }}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: '#364e9b' }}
                {...getFieldProps('remember')}
                checked={values.remember}
              />
            }
            label="Remember me"
          />

          <Typography sx={{ color: 'white' }} variant="subtitle2">
            Forgot your password?
          </Typography>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{ backgroundColor: '#2fc557', boxShadow: 'none' }}
        >
          Log in
        </LoadingButton>
      </Form>
    </FormikProvider>
  )
}
