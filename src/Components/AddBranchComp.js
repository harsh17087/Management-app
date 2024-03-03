
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const AddBranchComp = () => {
    const nav = useNavigate();
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
 
    const addBranch = (event)=>{
        event.preventDefault();
        
        axios.post(`http://localhost:8888/branches`,branch).then(()=>{
            window.alert("Branch Details Added Succesfully");
            nav('/home/branches');
        }).catch((error)=>{})
    }
 
  return (
    <div>
          <h2 style={{textAlign:'center',marginTop: '10px',textDecoration: 'underline'}}>Add Branch Details</h2>
          <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
                <form onSubmit={(e)=>addBranch(e)}>
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
 
export default AddBranchComp