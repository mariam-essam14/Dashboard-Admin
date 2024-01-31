import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import PieChart from '../../Pages/Pie/PieChart'
import React from 'react'
import Chart from '../../Pages/Bar/Chart'
import Geo from '../../Pages/Geography/Geo'

export default function Row3() {
  const theme = useTheme()
  return (
    <Stack mt={2} direction={"row"} flexWrap={"wrap"} gap={1.5}> 
       <Paper  sx={{flexGrow:1,minWidth:"400px",width:"28%" }}>
        <Typography
        color={theme.palette.secondary.main}
        sx={{padding:"30px 30px 0 30px"}}
        variant='h6'
        fontWeight={"600"}
        >
         Campaign
        </Typography>
           <PieChart isDashboard={true}/>
         
         <Typography variant='h6'align='center' sx={{mt:"15px"}}>
         $48,352 revenue generated
         </Typography>
         <Typography variant='body2' px={0.7} pb={3} align='center'>
         Includes extra misc expenditures and costs
         </Typography>

       </Paper>

       <Paper  sx={{flexGrow:1,minWidth:"400px",width:"33%"}}>
       <Typography
        color={theme.palette.secondary.main}
        sx={{padding:"30px 30px 0 30px"}}
        variant='h6'
        fontWeight={"600"}
        >
         Sales Quantity
        </Typography>

          <Chart isDashboard={true}/>
       </Paper>

       <Paper sx={{flexGrow:1,minWidth:"400px",width:"33%"}} >
          <Geo isDashboard={true}/>
       </Paper>   
    </Stack>
  )
}
