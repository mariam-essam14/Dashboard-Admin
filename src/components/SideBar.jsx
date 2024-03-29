import React from 'react'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { Avatar, Tooltip, Typography, styled, useTheme } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, MapOutlined, PeopleAltOutlined, PersonOutlineOutlined, PieChartOutlineOutlined, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';






export default function SideBar({ open, handleDrawerClose }) {
    const drawerWidth = 240;
    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        // @ts-ignore
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );
    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
    const theme = useTheme();
    const Array1 = [
        { "text": "Dashboard", "icon": <HomeOutlinedIcon />, "path": "/Dashboard-Admin/" },
        { "text": "Manage Team", "icon": <PeopleAltOutlined />, "path": "/Dashboard-Admin/team" },
        { "text": "Contacts Information", "icon": <ContactsOutlined />, "path": "/Dashboard-Admin/contacts" },
        { "text": "Invoices Balances", "icon": <ReceiptOutlined />, "path": "/Dashboard-Admin/invoices" },
    ];

    const Array2 = [
        { "text": "Profile Form", "icon": <PersonOutlineOutlined />, "path": "/Dashboard-Admin/form" },
        { "text": "Calender", "icon": <CalendarTodayOutlined />, "path": "/Dashboard-Admin/calender" },
        { "text": "FAQ Page", "icon": <HelpOutlineOutlined />, "path": "/Dashboard-Admin/faq" },
    ];

    const Array3 = [
        { "text": "Bar Chart", "icon": <BarChartOutlined />, "path": "/Dashboard-Admin/bar" },
        { "text": "Pie Chart", "icon": <PieChartOutlineOutlined />, "path": "/Dashboard-Admin/pie" },
        { "text": "Line Chart", "icon": <TimelineOutlined />, "path": "/Dashboard-Admin/line" },
        { "text": "Geography Chart", "icon": <MapOutlined />, "path": "/Dashboard-Admin/geography" },
    ];

    const navigate = useNavigate();
    let location = useLocation()

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            <Divider />
            <Avatar sx={{ mx: "auto", width: open ? 88 : 44, height: open ? 88 : 44, transition: "0.25s", my: 1, border: "2px solid gray" }} alt="Remy Sharp" src="https://img.freepik.com/free-photo/portrait-cute-little-girl-with-long-hair-standing-park_23-2147893135.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais" />
            <Typography align='center' sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }} >Roma</Typography>
            <Typography align='center' sx={{ fontSize: open ? 15 : 0, transition: "0.25s", color: theme.palette.info.main }} >Admin</Typography>

            <Divider />

            <List>
                {Array1.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <Tooltip title={ open ?null:item.text} placement="right">
                            <ListItemButton onClick={() => { navigate(item.path) }} sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] : null }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>


            <Divider />
            <List>
                {Array2.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <Tooltip title={open ?null:item.text} placement="right">
                        <ListItemButton onClick={() => { navigate(item.path) }} sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] : null }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>


            <Divider />
            <List>
                {Array3.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <Tooltip title={open ?null: item.text} placement="right">
                        <ListItemButton onClick={() => { navigate(item.path) }} sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[300] : null }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>


        </Drawer>
    )
}
