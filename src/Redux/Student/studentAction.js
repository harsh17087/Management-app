import { FETCH_STUDENT_REQUEST,FETCH_STUDENT_FAILURE,FETCH_STUDENT_SUCCESS,DELETE_STUDENT_FAILURE,DELETE_STUDENT_REQUEST,DELETE_STUDENT_SUCCESS } from "./studentType";
import axios from "axios";
export const fetch_student_request = ()=>{
   return{
       type:FETCH_STUDENT_REQUEST
   }
}
export const fetch_student_success = (students)=>{
   return{
       type:FETCH_STUDENT_SUCCESS,
       payload : students
       
   }
}
export const fetch_student_failure = (error)=>{
   return{
       type:FETCH_STUDENT_FAILURE,
       payload : error
   }
}

export const delete_student_request = ()=>{
   return{
       type:DELETE_STUDENT_REQUEST
   }
}
export const delete_student_success = (students)=>{
   return{
       type:DELETE_STUDENT_SUCCESS,
       payload : students
   }
}
export const delete_student_failure = (error)=>{
   return{
       type:DELETE_STUDENT_FAILURE,
       payload : error
   }
}
// Function to implement thunk

export const fetch_students=()=>{
   return function(dispatch){
       // Loading request
       dispatch(fetch_student_request())
       axios.get("http://localhost:8888/students").then((res)=>{
          
       // Success request execute
           const students=res.data
           dispatch((fetch_student_success(students)))
       }).catch((error)=>{

           dispatch(fetch_student_failure(error.message))
       })
   }
}

export const delete_student = (id)=>{
   return function(dispatch){
       axios.delete(`http://localhost:8888/students/${id}`).then((res)=>{
           dispatch(fetch_students())
       }).catch((error)=>{
           dispatch(delete_student_failure(error.message))
       })
   }
}
