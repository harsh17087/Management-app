import { FETCH_EMPLOYEE_FAILURE,FETCH_EMPLOYEE_REQUEST,FETCH_EMPLOYEE_SUCCESS,DELETE_EMPLOYEE_FAILURE,DELETE_EMPLOYEE_REQUEST,DELETE_EMPLOYEE_SUCCESS } from "./employeeType";
import axios from "axios";
export const fetch_employee_request = ()=>{
   return{
       type:FETCH_EMPLOYEE_REQUEST
   }
}
export const fetch_employee_success = (employees)=>{
   return{
       type:FETCH_EMPLOYEE_SUCCESS,
       payload : employees
       
   }
}
export const fetch_employee_failure = (error)=>{
   return{
       type:FETCH_EMPLOYEE_FAILURE,
       payload : error
   }
}

export const delete_employee_request = ()=>{
   return{
       type:DELETE_EMPLOYEE_REQUEST
   }
}
export const delete_employee_success = (employees)=>{
   return{
       type:DELETE_EMPLOYEE_SUCCESS,
       payload : employees
   }
}
export const delete_employee_failure = (error)=>{
   return{
       type:DELETE_EMPLOYEE_FAILURE,
       payload : error
   }
}
// Function to implement thunk

export const fetch_employees=()=>{
   return function(dispatch){
       // Loading request
       dispatch(fetch_employee_request())
       axios.get("http://localhost:8888/employees").then((res)=>{
          
       // Success request execute
           const employees=res.data
           dispatch((fetch_employee_success(employees)))
       }).catch((error)=>{

           dispatch(fetch_employee_failure(error.message))
       })
   }
}

export const delete_employee = (id)=>{
   return function(dispatch){
       axios.delete(`http://localhost:8888/employees/${id}`).then((res)=>{
           dispatch(fetch_employees())
       }).catch((error)=>{
           dispatch(delete_employee_failure(error.message))
       })
   }
}
