/* eslint-disable */
import React from 'react'
// material
import { styled, useTheme } from '@material-ui/core/styles'
import { Typography, Stack, Box } from '@material-ui/core'
import { MotionInView, varFadeInUp, varFadeInDown } from '../components/animate'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // padding: theme.spacing(14, 0),
}))

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
}))

// ----------------------------------------------------------------------

export default function Banner() {
  return (
    <RootStyle>
      <ContentStyle>
        <Box position="relative">
          <img
            src="/images/slider.jpg"
            alt="banner"
            style={{ width: '100%' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '35%',
              width: '100%',
              color: 'common.white',
            }}
          >
            <Stack spacing={1}>
              <Stack>
                <MotionInView variants={varFadeInUp}>
                  <Typography
                    variant="h1"
                    align="center"
                    sx={{ textTransform: 'uppercase' }}
                  >
                    Page Title
                  </Typography>
                  <Typography
                    fontSize={36}
                    align="center"
                    sx={{ textTransform: 'uppercase' }}
                  >
                    Sub title will be here
                  </Typography>
                </MotionInView>
              </Stack>
              <Stack direction="row" justifyContent="center">
                <MotionInView variants={varFadeInUp}>
                  <Typography fontSize={28} align="center" maxWidth={550}>
                    Here will be some form of text maybe a little paragraph of
                    info to grab the eye
                  </Typography>
                </MotionInView>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </ContentStyle>
    </RootStyle>
  )
}
