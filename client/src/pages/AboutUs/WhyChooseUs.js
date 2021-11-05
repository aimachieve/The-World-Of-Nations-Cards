/* eslint-disable */
// material
import { styled } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Button,
} from '@material-ui/core'
//
import {
  MotionInView,
  varFadeInUp,
  varFadeInDown,
  varFadeInLeft,
  varFadeInRight,
} from '../../components/animate'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(14, 0),
}))

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  // marginBottom: theme.spacing(10),
  // [theme.breakpoints.up('md')]: {
  //   height: '100%',
  //   marginBottom: 0,
  //   textAlign: 'left',
  //   display: 'inline-flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'flex-start',
  // },
}))

// ----------------------------------------------------------------------

export default function WhoWeAre() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <ContentStyle>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <MotionInView variants={varFadeInLeft}>
                <img
                  src="/images/placeholder-about-us-homepage.jpg"
                  alt="whoWeArePlaceholder"
                />
              </MotionInView>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionInView variants={varFadeInRight}>
                <Stack spacing={3}>
                  <Box>
                    <Typography
                      variant="h3"
                      align="left"
                      sx={{
                        color: 'common.black',
                        textTransform: 'uppercase'
                      }}
                    >
                      Title
                    </Typography>
                    <Typography
                      align="left"
                      color="primary"
                      variant="subtitle1"
                    >
                      Small sub-text for the section
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="common.black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam eros arcu, malesuada auctor velit feugiat, dapibus
                    congue ligula. Etiam ipsum nisl, scelerisque ac nunc mollis,
                    ullamcorper rhoncus est. Vestibulum dapibus tortor turpis,
                    et
                  </Typography>
                  <Typography variant="body2" color="common.black">
                    Pretium odio eleifend et. Nam sit amet leo mi. Quisque
                    molestie nisi orci. Vestibulum lobortis mauris vitae
                    fringilla elementum. Mauris consectetur dapibus faucibus.
                  </Typography>
                </Stack>
              </MotionInView>
            </Grid>
          </Grid>
        </ContentStyle>
      </Container>
    </RootStyle>
  )
}
