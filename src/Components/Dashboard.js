import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from './listItems';
import mainLogo from '../Images/logo_main.jpeg'
import LogoutIcon from '@mui/icons-material/Logout';
import CarouselImage from './CarouselImage';
import { Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" height={'30px'} backgroundColor="dark-grey" color="text.black" align="center" {...props} style={{marginLeft:'180px'}}>
      {'Copyright © '}
      
        <b>Management App </b>
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'absolute',
      whiteSpace: 'nowrap',
      
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    //   boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  

  const nav = useNavigate();
  const logout=()=>{
      if(window.confirm('Are you sure to logout')){
          sessionStorage.removeItem("user")
          nav('/')
      }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          
          <Toolbar
            sx={{
              pr: '24px',
               // keep right padding when drawer closed
            }}
          >
          
            
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              IIM Ahmedabad
            </Typography>
            <p style={{marginTop:'15px',marginRight:'20px',fontSize:'18px'}}>{`Welcome ${sessionStorage.getItem('name')}`}</p>{' '}
            <Button className='btn btn-danger' onClick={()=>logout()}><LogoutIcon/></Button>
            
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
        
          
          
        <img src={mainLogo} style={{width:'5em', height:'5em', borderRadius:'50%', marginLeft:'32%'}}/>
         
         
          <List component="nav">
            {mainListItems}
            
            
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            
          }}
        >
      {/* <img src={mainLogo} style={{width:'5em', height:'5em', borderRadius:'50%', marginLeft:'32%'}}/> */}
          <Toolbar/>

          <div style={{marginRight:'0px',marginLeft:'200px'}}>
            <Outlet/>

          </div>
        <Copyright />
          
        </Box>
        

      </Box>
      
      {/* <img src={mainLogo} style={{width:'5em', height:'5em', borderRadius:'50%', marginLeft:'32%'}}/> */}
      
    </ThemeProvider>
    
  );
}