/* eslint-disable */
import React from 'react'
// material
import { styled } from '@material-ui/core/styles'
import { Container, Typography, Stack, Button } from '@material-ui/core'
//
import { MotionInView, varFadeInUp, varFadeInDown } from '../components/animate'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(14, 0),
  backgroundImage: 'url("/images/sign-up-image.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}))

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
}))

// ----------------------------------------------------------------------

export default function SignUpCTA() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <ContentStyle>
          <Stack spacing={3}>
            <MotionInView variants={varFadeInUp}>
              <Typography
                variant="h1"
                align="center"
                sx={{
                  color: 'common.white',
                  textTransform: 'uppercase',
                }}
              >
                Create An Account
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Container maxWidth="md">
                <Typography align="center" color="common.white" fontSize={28}>
                  Sign up now to start being part of the fun! We have many
                  events and you may just end up winning some of the most
                  amazing prizes available!
                </Typography>
              </Container>
            </MotionInView>

            <MotionInView variants={varFadeInDown}>
              <Typography align="center">
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    color: 'common.white',
                    fontSize: 22,
                    textTransform: 'uppercase',
                    px: 10
                  }}
                >
                  sign up
                </Button>
              </Typography>
            </MotionInView>
          </Stack>
        </ContentStyle>
      </Container>
    </RootStyle>
  )
}
