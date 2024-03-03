import { FETCH_BRANCH_FAILURE,FETCH_BRANCH_REQUEST,FETCH_BRANCH_SUCCESS,DELETE_BRANCH_FAILURE,DELETE_BRANCH_REQUEST,DELETE_BRANCH_SUCCESS } from "./branchType";
import axios from "axios";
export const fetch_branch_request = ()=>{
   return{
       type:FETCH_BRANCH_REQUEST
   }
}
export const fetch_branch_success = (branches)=>{
   return{
       type:FETCH_BRANCH_SUCCESS,
       payload : branches
       
   }
}
export const fetch_branch_failure = (error)=>{
   return{
       type:FETCH_BRANCH_FAILURE,
       payload : error
   }
}

export const delete_branch_request = ()=>{
   return{
       type:DELETE_BRANCH_REQUEST
   }
}
export const delete_branch_success = (branches)=>{
   return{
       type:DELETE_BRANCH_SUCCESS,
       payload : branches
   }
}
export const delete_branch_failure = (error)=>{
   return{
       type:DELETE_BRANCH_FAILURE,
       payload : error
   }
}
// Function to implement thunk

export const fetch_branches=()=>{
   return function(dispatch){
       // Loading request
       dispatch(fetch_branch_request())
       axios.get("http://localhost:8888/branches").then((res)=>{
          
       // Success request execute
           const branches=res.data
           dispatch((fetch_branch_success(branches)))
       }).catch((error)=>{

           dispatch(fetch_branch_failure(error.message))
       })
   }
}

export const delete_branch = (id)=>{
   return function(dispatch){
       axios.delete(`http://localhost:8888/branches/${id}`).then((res)=>{
           dispatch(fetch_branches())
       }).catch((error)=>{
           dispatch(delete_branch_failure(error.message))
       })
   }
}
