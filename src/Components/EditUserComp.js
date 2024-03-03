
import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

 
const EditUserComp = () => {
    const nav = useNavigate();
    const {id} = useParams() // it return id parameter from browser url

    const [user,setUser] = useState(
        {
            userid: "",
            userpass :"",
            name : "",
            contact: "", 
            role : ""   
            
        }
    );
 
    const inputChangeHandler = (event)=>{
        const {type,name,value} = event.target;
        setUser({...user,[name]:value});
    }
 
    useEffect(()=>{
       
        axios.get(`http://localhost:8888/users/${id}`).then((res)=>{
            // console.log(res.data)
            setUser(res.data)
        }).catch((error)=>{})
    },[])
 
   
    const editUser = (event)=>{
        event.preventDefault()
       
        axios.put(`http://localhost:8888/users/${id}`,user).then(()=>{
            window.alert("User edit successfully")
            nav('../users')
        }).catch((error)=>{})
    }
 
  return (
    <div>
          <h2 style={{textAlign:'center',marginTop: '10px',textDecoration: 'underline'}}>Edit User Details</h2>
          <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
                <form onSubmit={(e)=>editUser(e)}>
                <div>
                        <label className='form-label'>Enter User Id :</label>
                        <input type='text' name='userid' onChange={(e)=>inputChangeHandler(e)} value={user.userid} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter User Password:</label>
                        <input type='text' name='userpass' onChange={(e)=>inputChangeHandler(e)} value={user.userpass} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Name :</label>
                        <input type='text' name='name' onChange={(e)=>inputChangeHandler(e)} value={user.name} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Contact :</label>
                        <input type='text' name='contact' onChange={(e)=>inputChangeHandler(e)} value={user.contact} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Role :</label>
                        <input type='text' name='role' onChange={(e)=>inputChangeHandler(e)} value={user.role} className='form-control'/>
                       </div>
                       
                       
                       
                       
                        <br/>
                       <button className='btn btn-outline-primary'>Submit</button>
                </form>
            </div>
          </div>
    </div>
  )
}
 
export default EditUserComp