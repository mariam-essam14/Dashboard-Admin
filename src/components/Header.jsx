import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function Header({title,subtitle,isDahboard=false}) {
    const theme= useTheme()
  return (
    <Box mb={isDahboard?2:4}>
    <Typography variant='h5' sx={{color:theme.palette.info.light, fontWeight:"bold"}}>
    {title}
    </Typography>
    <Typography variant='body1'>
   {subtitle}
    </Typography>
   </Box>
  )
}
