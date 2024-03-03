
import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
 
 
export const EditStudentComp = () => {
   
    const {id} = useParams() // it return id parameter from browser url
    const nav = useNavigate() // it is used to perform navigation automatically
 
    const[stud,setStudent] = useState({
        id: "",
        studName :"",
        studFname : "",
        studGender: "",
        studCourse :"",
        studSpec : "",
        studDob: "",
        studEmail :"",
        studAdd : "",
        studNat: "",
        studPnum :"",
        studGnum : "",
        studBgroup:""
    })
 
    const inputChangeHandler = (event)=>{
        const {type,name,value} = event.target
        setStudent({...stud,[name] : value})
       
    }
 
    useEffect(()=>{
       
        axios.get(`http://localhost:8888/students/${id}`).then((res)=>{
            // console.log(res.data)
            setStudent(res.data)
        }).catch((error)=>{})
    },[])
 
   
    const editStudents = (event)=>{
        event.preventDefault()
       
        axios.put(`http://localhost:8888/students/${id}`,stud).then(()=>{
            window.alert("Student edit successfully")
            nav('../students')
        }).catch((error)=>{})
    }
 
    return (
        <div>
            <h2 style={{textAlign:'center',marginTop: '10px',textDecoration: 'underline'}}>Edit Student Details</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={(e)=>editStudents(e)}>
                       <div>
                        <label className='form-label'>Enter Student Id :</label>
                        <input type='text' name='id' onChange={(e)=>inputChangeHandler(e)} value={stud.id} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Name :</label>
                        <input type='text' name='studName' onChange={(e)=>inputChangeHandler(e)} value={stud.studName} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Father's Name :</label>
                        <input type='text' name='studFname' onChange={(e)=>inputChangeHandler(e)} value={stud.studFname} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Gender :</label>
                        <input type='text' name='studGender' onChange={(e)=>inputChangeHandler(e)} value={stud.studGender} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Course :</label>
                        <input type='text' name='studCourse' onChange={(e)=>inputChangeHandler(e)} value={stud.studCourse} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Specialization :</label>
                        <input type='text' name='studSpec' onChange={(e)=>inputChangeHandler(e)} value={stud.studSpec} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Date Of Birth :</label>
                        <input type='text' name='studDob' onChange={(e)=>inputChangeHandler(e)} value={stud.studDob} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Email Id :</label>
                        <input type='text' name='studEmail' onChange={(e)=>inputChangeHandler(e)} value={stud.studEmail} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Address :</label>
                        <input type='text' name='studAdd' onChange={(e)=>inputChangeHandler(e)} value={stud.studAdd} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Nationality :</label>
                        <input type='text' name='studNat' onChange={(e)=>inputChangeHandler(e)} value={stud.studNat} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Phone Number :</label>
                        <input type='text' name='studPnum' onChange={(e)=>inputChangeHandler(e)} value={stud.studPnum} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Guardian Phone Number :</label>
                        <input type='text' name='studGnum' onChange={(e)=>inputChangeHandler(e)} value={stud.studGnum} className='form-control'/>
                       </div>
                       <div>
                        <label className='form-label'>Enter Student Blood Group :</label>
                        <input type='text' name='studBgroup' onChange={(e)=>inputChangeHandler(e)} value={stud.studBgroup} className='form-control'/>
                       </div>
                        <br/>
                       <button className='btn btn-outline-primary'>Submit</button>
                    </form>
 
                </div>
                <div className='col-sm-3'></div>
            </div>
        </div>
    )
}
 
 
 export default EditStudentComp