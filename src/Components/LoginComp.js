import React from 'react'
import { Avatar, Button , CssBaseline , TextField, FormControlLabel, Checkbox, Link, Grid , Box , Typography, Container } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import mainLogo from '../Images/logo_main.jpeg'
import { useState } from 'react';

const defaultTheme = createTheme();

const LoginComp = () => {
    
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })
  
    
    
 
  

  const inputChangeHandler = (event)=>{
    
        // const {type,name,value,checked} = event.target;
    const {name,value} = event.target;

        setFormData({...formData,[name]:value})
    }
  
  const nav=useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();


        if(!formData.email){
          
          document.getElementById('userError').innerHTML = "E-mail field can't be empty"
          
          
          return false;
      }
        if(!formData.email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)){
          document.getElementById('userError').innerHTML="Please write E-mail in correct format"
          
          return false;
      }

      if(!formData.password){
        document.getElementById('passError').innerHTML = "Password field can't be empty"
        
        return false;
      }
      if(!formData.password.match("[A-Za-z]{5,15}")){
        document.getElementById('passError').innerHTML="Your Password should contain min 5 characters"
        
        return false;
      }


        const data = new FormData(event.currentTarget);
        
        let currentUid = data.get("email")
        let currentUpass=data.get("password")
        
        axios.get("http://localhost:8888/users").then((res)=>{
            const userData = res.data
            
          const data=userData.filter((val)=>{return val.userid===currentUid && val.userpass===currentUpass})
           
            
        if(data.length>0){
          let currName = data[0].name  
          sessionStorage.setItem("user",currentUid);
          sessionStorage.setItem("name",currName);
            nav('/home');
            
            
            
        }else{
            window.alert("wrong credentials inserted")
        }
        
    }).catch((error)=>{})}
         
    return (
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid black',
            borderRadius: '20px',
            backgroundColor: 'lavender'
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
        <img src={mainLogo} style={{width:'5em', height:'5em', borderRadius:'50%'}}/>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onChange={(event)=>inputChangeHandler(event)}  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
            />
            <Typography><p id='userError' style={{fontSize:'12px', color:'red'}}></p></Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
            />
             <p id='passError' style={{fontSize:'12px', color:'red'}}></p>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
              
            </Button>
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    )
}

export default LoginComp
