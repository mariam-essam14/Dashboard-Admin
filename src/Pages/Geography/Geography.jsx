import { Box, useTheme } from '@mui/material'
import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { geo } from './world_countries'
import { data } from './dataGeo'
import Geo from './Geo'
import Header from '../../components/Header'

export default function Geography() {
  const theme = useTheme()

  return <>
  <Header title={"Geography"} subtitle={"Simple Geography Chart"}/>
    <Geo/>
 </>
}
