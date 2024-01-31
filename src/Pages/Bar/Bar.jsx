import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box, useTheme } from '@mui/material'
import Chart from './Chart'
import Header from '../../components/Header'

export default function Bar() {
  
   const theme =useTheme()

  return <>
    <Header title={"Bar Chart"} subtitle={"The minimum wage in Germany, France and Spain (EUR/month)"}/>
    <Chart/>
  </>
}
