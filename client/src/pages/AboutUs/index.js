/* eslint-disable */
import React from 'react'
// material
import { styled } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
// components
import Page from '../../components/Page'
import WhyChooseUs from './WhyChooseUs'
import { CarouselBasic3 } from 'components/carousel'
import HowItWorks from './HowItWorks'
import LiveEvents from './LiveEvents'
import SignUpCTA from 'customComponents/SignUpCTA'
import Banner from 'customComponents/Banner'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  paddingTop: 120,
  // paddingBottom: 88,
  height: '100%',
})

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}))

// ----------------------------------------------------------------------

export default function AboutUs() {
  return (
    <RootStyle>
      <ContentStyle>
        <Banner />
        <Box sx={{ backgroundImage: 'url("/images/site-background.jpg")' }}>
          <WhyChooseUs />
          <HowItWorks />
          <LiveEvents />
          <SignUpCTA />
        </Box>
      </ContentStyle>
    </RootStyle>
  )
}
