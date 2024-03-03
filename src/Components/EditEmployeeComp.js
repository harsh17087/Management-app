
import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

 
const EditEmployeeComp = () => {
    const nav = useNavigate();
    const {id} = useParams() // it return id parameter from browser url

    const [emp,setEmp] = useState(
        {
            id: "",
            name: "",
            department: "",
            gender: "",
            contact: "",
            course: "",
            experience: "",
            blood_group: "",
            emergency_contact: "",
            address: "",
            qualification: "",
            age: "",
            salary: "",
            post: "",
            employment_type: ""    
            
        }
    );
 
    const inputChangeHandler = (event)=>{
        const {type,name,value} = event.target;
        setEmp({...emp,[name]:value});
    }
 
    useEffect(()=>{
       
        axios.get(`http://localhost:8888/employees/${id}`).then((res)=>{
            // console.log(res.data)
            setEmp(res.data)
        }).catch((error)=>{})
    },[])
 
   
    const editEmp = (event)=>{
        event.preventDefault()
       
        axios.put(`http://localhost:8888/employees/${id}`,emp).then(()=>{
            window.alert("Employee edit successfully")
            nav('../employees')
        }).catch((error)=>{})
    }
 
  return (
    <div>
          <h2 style={{textAlign:'center',marginTop: '10px',textDecoration: 'underline'}}>Edit Employees Details</h2>
          <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
                <form onSubmit={(e)=>editEmp(e)}>
                <div>
                        <label className='form-label'>Enter Employee Name :</label>
                        <input type='text' name='name' onChange={(e)=>inputChangeHandler(e)} value={emp.name} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Employee Post:</label>
                        <input type='text' name='post' onChange={(e)=>inputChangeHandler(e)} value={emp.post} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Department :</label>
                        <input type='text' name='department' onChange={(e)=>inputChangeHandler(e)} value={emp.department} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Address :</label>
                        <input type='text' name='address' onChange={(e)=>inputChangeHandler(e)} value={emp.address} className='form-control'/>
                       </div>
                       
                       
                       
                       
                        <br/>
                       <button className='btn btn-outline-primary'>Submit</button>
                </form>
            </div>
          </div>
    </div>
  )
}
 
export default EditEmployeeComp