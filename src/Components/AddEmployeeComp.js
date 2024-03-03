
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

 
const AddEmployeeComp = () => {
    const nav = useNavigate();
  

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
 
    const addEmp = (event)=>{
        event.preventDefault();
        axios.post(`http://localhost:8888/employees`,emp).then(()=>{
            window.alert("Employee Details Added Succesfully");
            nav('/home/employees');
        }).catch((error)=>{})
    }
 
  return (
    <div>
          <h2 style={{textAlign:'center',marginTop: '10px',textDecoration: 'underline'}}>Add Employees Details</h2>
          <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
                <form onSubmit={(e)=>addEmp(e)}>
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
                       <div>
                        <label className='form-label'>Enter Experience :</label>
                        <input type='text' name='experience' onChange={(e)=>inputChangeHandler(e)} value={emp.experience} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Gender :</label>
                        <input type='text' name='gender' onChange={(e)=>inputChangeHandler(e)} value={emp.gender} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Course :</label>
                        <input type='text' name='course' onChange={(e)=>inputChangeHandler(e)} value={emp.course} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Qualification :</label>
                        <input type='text' name='qualification' onChange={(e)=>inputChangeHandler(e)} value={emp.qualification} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Age :</label>
                        <input type='text' name='age' onChange={(e)=>inputChangeHandler(e)} value={emp.age} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Salary :</label>
                        <input type='text' name='salary' onChange={(e)=>inputChangeHandler(e)} value={emp.salary} className='form-control'/>
                       </div>
                       
                       
                       
                       
                        <br/>
                       <button className='btn btn-outline-primary'>Submit</button>
                </form>
            </div>
          </div>
    </div>
  )
}
 
export default AddEmployeeComp