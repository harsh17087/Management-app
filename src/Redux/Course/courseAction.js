import { FETCH_COURSE_FAILURE,FETCH_COURSE_REQUEST,FETCH_COURSE_SUCCESS,DELETE_COURSE_FAILURE,DELETE_COURSE_REQUEST,DELETE_COURSE_SUCCESS } from "./courseType";

import axios from "axios";
export const fetch_course_request = ()=>{
   return{
       type:FETCH_COURSE_REQUEST
   }
}
export const fetch_course_success = (courses)=>{
   return{
       type:FETCH_COURSE_SUCCESS,
       payload : courses
       
   }
}
export const fetch_course_failure = (error)=>{
   return{
       type:FETCH_COURSE_FAILURE,
       payload : error
   }
}

export const delete_course_request = ()=>{
   return{
       type:DELETE_COURSE_REQUEST
   }
}
export const delete_course_success = (courses)=>{
   return{
       type:DELETE_COURSE_SUCCESS,
       payload : courses
   }
}
export const delete_course_failure = (error)=>{
   return{
       type:DELETE_COURSE_FAILURE,
       payload : error
   }
}
// Function to implement thunk

export const fetch_courses=()=>{
   return function(dispatch){
       // Loading request
       dispatch(fetch_course_request())
       axios.get("http://localhost:8888/courses").then((res)=>{
          
       // Success request execute
           const courses=res.data
           dispatch((fetch_course_success(courses)))
       }).catch((error)=>{

           dispatch(fetch_course_failure(error.message))
       })
   }
}

export const delete_course = (id)=>{
   return function(dispatch){
       axios.delete(`http://localhost:8888/courses/${id}`).then((res)=>{
           dispatch(fetch_courses())
       }).catch((error)=>{
           dispatch(delete_course_failure(error.message))
       })
   }
}
