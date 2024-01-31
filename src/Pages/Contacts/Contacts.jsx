import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box, Typography } from "@mui/material";
import { columns, rows } from './data';
import Header from '../../components/Header';


export default function Contacts() {
  return (
    <Box sx={{ height: 650, width: '98%' ,mx:"auto"}}>
     <Header title={"CONTACTS"} subtitle={"List of Contacts for Future Reference"}/>
      <DataGrid 
        slots={{
          toolbar: GridToolbar,
        }}
      rows={rows} 

      // @ts-ignore
      columns={columns} />
    </Box>
  )
}
