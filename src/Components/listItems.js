import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';

import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
export const mainListItems = (
  <React.Fragment>
    <ListItemButton  href='/home'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton >
    <ListItemButton component={Link} to={'/home/students'}>
      <ListItemIcon>
        < PeopleIcon/>
      </ListItemIcon>
      <ListItemText primary="Students" />
    </ListItemButton>
    <ListItemButton component={Link} to={'/home/courses'}>
      <ListItemIcon>
        < LibraryBooksOutlinedIcon/>
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItemButton>
    <ListItemButton component={Link} to={'/home/branches'}>
      <ListItemIcon>
        <CorporateFareOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Branches" />
    </ListItemButton>
    <ListItemButton component={Link} to={'/home/employees'}>
      <ListItemIcon>
        < BadgeOutlinedIcon/>
      </ListItemIcon >
      <ListItemText primary="Employee" />
    </ListItemButton>


    
    {sessionStorage.user=='admin@gmail.com' && <ListItemButton component={Link} to={'/home/user'}>
      <ListItemIcon>
        <AdminPanelSettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="User" />
    </ListItemButton>}
    


    
  </React.Fragment>
);

