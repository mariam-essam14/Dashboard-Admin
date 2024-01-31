import { Box, useTheme } from '@mui/material'
import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import LineChart from './LineChart'
import Header from '../../components/Header'
export default function Line() {
  
 const theme = useTheme()
  return <>
  <Header title={"Line Chart"} subtitle={"Simple Line Chart"}/>
    <LineChart/>
    </>
 
}
