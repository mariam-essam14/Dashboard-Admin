import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box, useTheme } from '@mui/material'
import PieChart from './PieChart'
import Header from '../../components/Header'

export default function Pie() {
  
  const theme = useTheme()
  
  return <>
  <Header title={"Pie Chart"} subtitle={"Simple Pie Chart"}/>
    <PieChart/>
  </>
}
