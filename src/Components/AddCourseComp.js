
import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

 
const AddCourseComp = () => {
    const nav = useNavigate();

    const [course,setCourse] = useState(
        {
            Name: "",
            Instructor :"",
            Duration : "",
            Fee: "", 
            Certification : ""   
            
        }
    );
 
    const inputChangeHandler = (event)=>{
        const {type,name,value} = event.target;
        setCourse({...course,[name]:value});
    }
 
    
 
   
    const addCourse = (event)=>{
        event.preventDefault()
       
        axios.post(`http://localhost:8888/courses`,course).then(()=>{
            window.alert("Course added successfully")
            nav('../courses')
        }).catch((error)=>{})
    }
 
  return (
    <div>
          <h2 style={{textAlign:'center',marginTop: '10px',textDecoration: 'underline'}}>Add Course Details</h2>
          <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
                <form onSubmit={(e)=>addCourse(e)}>
                <div>
                        <label className='form-label'>Enter Course Name :</label>
                        <input type='text' name='Name' onChange={(e)=>inputChangeHandler(e)} value={course.Name} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Instructor Name:</label>
                        <input type='text' name='Instructor' onChange={(e)=>inputChangeHandler(e)} value={course.Instructor} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Duration :</label>
                        <input type='text' name='Duration' onChange={(e)=>inputChangeHandler(e)} value={course.Duration} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Fee :</label>
                        <input type='text' name='Fee' onChange={(e)=>inputChangeHandler(e)} value={course.Fee} className='form-control'/>
                       </div>
                       
                       
                       
                       
                        <br/>
                       <button className='btn btn-outline-primary'>Submit</button>
                </form>
            </div>
          </div>
    </div>
  )
}
 
export default AddCourseComp