
import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

 
const EditBranchComp = () => {
    const nav = useNavigate();
    const {id} = useParams() // it return id parameter from browser url

    const [branch,setBranch] = useState(
        {
            branchname: "",
            phone :"",
            email : "",
            address: "",    
            
        }
    );
 
    const inputChangeHandler = (event)=>{
        const {type,name,value} = event.target;
        setBranch({...branch,[name]:value});
    }
 
    useEffect(()=>{
       
        axios.get(`http://localhost:8888/branches/${id}`).then((res)=>{
            // console.log(res.data)
            setBranch(res.data)
        }).catch((error)=>{})
    },[])
 
   
    const editBranch = (event)=>{
        event.preventDefault()
       
        axios.put(`http://localhost:8888/branches/${id}`,branch).then(()=>{
            window.alert("Branch edit successfully")
            nav('../branches')
        }).catch((error)=>{})
    }
 
  return (
    <div>
          <h2 style={{textAlign:'center',marginTop: '10px',textDecoration: 'underline'}}>Edit Branch Details</h2>
          <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
                <form onSubmit={(e)=>editBranch(e)}>
                <div>
                        <label className='form-label'>Enter Branch Name :</label>
                        <input type='text' name='branchname' onChange={(e)=>inputChangeHandler(e)} value={branch.branchname} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Phone:</label>
                        <input type='text' name='phone' onChange={(e)=>inputChangeHandler(e)} value={branch.phone} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter E-mail :</label>
                        <input type='text' name='email' onChange={(e)=>inputChangeHandler(e)} value={branch.email} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Address :</label>
                        <input type='text' name='address' onChange={(e)=>inputChangeHandler(e)} value={branch.address} className='form-control'/>
                       </div>
                       
                       
                       
                       
                        <br/>
                       <button className='btn btn-outline-primary'>Submit</button>
                </form>
            </div>
          </div>
    </div>
  )
}
 
export default EditBranchComp