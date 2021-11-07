/* eslint-disable */
import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Box, Container, Stack } from '@material-ui/core'
import Banner from 'customComponents/Banner'
import SignUpCTA from 'customComponents/SignUpCTA'
import Item from './Item.js'

const RootStyle = styled('div')(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
}))

const ContentStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'center',
}))

const MainStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#000',
  color: '#fff',
}))

export default function Portfolio() {
  return (
    <RootStyle>
      <ContentStyle>
        {/* Banner */}
        <Banner />

        <Box sx={{ backgroundImage: 'url("/images/site-background.jpg")' }}>
          {/* Drop a message */}
          <Container maxWidth="xl">
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                paddingTop: '30px',
                paddingBottom: '30px',
              }}
            >
              <Item />
              <Item />
              <Item />
              <Item />
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                paddingTop: '30px',
                paddingBottom: '30px',
              }}
            >
              <Item />
              <Item />
              <Item />
              <Item />
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                paddingTop: '30px',
                paddingBottom: '30px',
              }}
            >
              <Item />
              <Item />
              <Item />
              <Item />
            </Stack>
          </Container>

          {/* Sign Up Now */}
          <SignUpCTA />
        </Box>
      </ContentStyle>
    </RootStyle>
  )
}
