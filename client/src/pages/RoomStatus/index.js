/* eslint-disable */
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Grid, Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

import { CarouselBasic3 } from 'components/carousel'
import UserList from './UserList'
import TicketTable from './TicketTable'
import useDraw from 'hooks/useDraw'
import { MotionInView, varFadeInUp } from '../../components/animate'
import DaysAccordion from './DaysAccordions'
import LoadingScreen from 'components/LoadingScreen'

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
  backgroundColor: theme.palette.grey[900],
}))

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.grey[900],
  paddingBottom: theme.spacing(10),
}))

export default function RoomStatus() {
  const currentUser = JSON.parse(localStorage.getItem('user'))
  const { getRandomTables, getRandomTablesByUserId, tables, users, days, currentDay, finalWinner, getFinalWinner, getCurrentEvent, current_event } = useDraw()
  const [isLoading, setIsLoading] = useState(true)
  const [isVisibleDaysAccordion, setIsVisibleDaysAccordion] = useState(true)

  useEffect(() => {
    getFinalWinner();
    getCurrentEvent();
    setIsLoading(true)
    if (currentUser) {
      getRandomTablesByUserId(currentUser._id)
    } else {
      getRandomTables()
    }
    setIsLoading(false)
  }, [])

  let event_status = current_event ? current_event.status == 2 : false ;

  return (
    <RootStyle>
      <ContentStyle>
        <CarouselBasic3 />
        <Box sx={{ px: 10, mt: 10 }}>
          <Grid container spacing={12}>
            <Grid item xs={12} md={4}>
              <UserList setIsVisibleDaysAccordion={setIsVisibleDaysAccordion} />
            </Grid>
            <Grid item xs={12} md={6} mt={5}>
              { currentDay == days.length &&  event_status ?(
                <Box>
                  <Typography
                    variant="h4"
                    textAlign="center"
                  >
                    Final Winners!
                    <Link to="/youtobe.com">YouTobe</Link>
                  </Typography>
                  <TableContainer sx={{ minHeight: 1200 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Username</TableCell>
                          <TableCell>Winning Entries</TableCell>
                          <TableCell>Final Draw Number</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {finalWinner.length > 0 && finalWinner.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.user.name}</TableCell>
                            <TableCell>{item.tickets.length}</TableCell>
                            <TableCell>{item.tickets.map((i, index) => <span key={index}>{index+1 == item.tickets.length ? i : i + ', '}</span>)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
                ):isVisibleDaysAccordion ? (        
                  <Grid container spacing={12}>
                    {isLoading ? (
                      <LoadingScreen />
                    ) : tables.length > 0 ? (
                      tables.map((table, key) => (
                        <Grid item xs={12} sm={12} md={6} lg={6} key={key}>
                          <MotionInView variants={varFadeInUp}>
                            <TicketTable table={table} />
                          </MotionInView>
                        </Grid>
                      ))
                    ) : (
                      <MotionInView variants={varFadeInUp}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Box fullWidth>
                            <Typography
                              variant="h4"
                              textAlign="center"
                              sx={{ ml: 10, mt: 20 }}
                            >
                              No data
                            </Typography>
                          </Box>
                        </Grid>
                      </MotionInView>
                    )}
                  </Grid>
                ) : null }
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              {isVisibleDaysAccordion ? <DaysAccordion /> : ''}
            </Grid>
          </Grid>
        </Box>
      </ContentStyle>
    </RootStyle>
  )
}
