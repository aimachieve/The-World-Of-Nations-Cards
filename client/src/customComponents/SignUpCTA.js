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
              <Container maxWidth="sm">
                <Typography align="center" color="common.white" fontSize={28}>
                  Here will be some form of text maybe a little paragraph of
                  info to grab the eye
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
                    fontSize: 28,
                    textTransform: 'uppercase',
                  }}
                >
                  sign up now
                </Button>
              </Typography>
            </MotionInView>
          </Stack>
        </ContentStyle>
      </Container>
    </RootStyle>
  )
}
