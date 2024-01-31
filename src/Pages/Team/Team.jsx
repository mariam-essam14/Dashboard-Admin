import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import {  rows } from './data'
import { useTheme } from '@mui/material'
import { Box, Typography } from "@mui/material";
import {AdminPanelSettingsOutlined,LockOpenOutlined,SecurityOutlined} from "@mui/icons-material"
import Header from '../../components/Header';

export default function Team() {
  const theme= useTheme()
  // field==required
 const columns = [
  { field: 'id', headerName: 'ID', width: 33, align: "center", headerAlign: "center" },
  { field: 'name', headerName: 'Name', align: "center", headerAlign: "center" },
  { field: 'email', headerName: 'Email', flex: 1, align: "center", headerAlign: "center" },
  { field: 'age', headerName: 'Age', align: "center", headerAlign: "center" },
  { field: 'phone', headerName: 'Phone', flex: 1, align: "center", headerAlign: "center" },
  { field: 'access', headerName: 'Access', flex: 1, align: "center", headerAlign: "center" ,
  renderCell:({row:{access}})=>{
      return(
          <Box sx={{
            
            p:"5px",
            width:"99px",
            borderRadius:"3px",
            textAlign:"center",
            display:"flex",
            justifyContent:"space-evenly",
            background: access==="Admin"? theme.palette.primary.dark: access==="Manager"? theme.palette.secondary.dark : "#3da58a",
          }}>
               {access==="Admin" && (<AdminPanelSettingsOutlined fontSize='small'sx={{  color:"white"}}/>) }
               {access==="Manager" && (<SecurityOutlined fontSize='small'sx={{ color:"white"}}/>) }
               {access==="User" && (<LockOpenOutlined fontSize='small'sx={{ color:"white"}}/>) }
              <Typography sx={{fontSize:"13px" , color:"white"}} >{access}</Typography>
          </Box>
      )
  }},

];
  return (
    
    

    <Box sx={{ height: 600, width: '98%' ,mx:"auto"}}>

      <Header title={"TEAM"} subtitle={"Managing the Team Members"}/>
      <DataGrid rows={rows} 
// @ts-ignore
      columns={columns} />
    </Box>
   
  )
}
