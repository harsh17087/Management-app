import { FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,
     DELETE_USER_FAILURE,DELETE_USER_REQUEST,DELETE_USER_SUCCESS,
    UPDATE_USER_FAILURE,UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,
    ADD_USER_FAILURE,ADD_USER_REQUEST,ADD_USER_SUCCESS } from "./userType";
import axios from "axios";
export const fetch_user_request = ()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}
export const fetch_user_success = (users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload : users
        
    }
}
export const fetch_user_failure = (error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload : error
    }
}
export const add_user_request = ()=>{
    return{
        type:ADD_USER_REQUEST
    }
}
export const add_user_success = (users)=>{
    return{
        type:ADD_USER_SUCCESS,
        payload : users
    }
}
export const add_user_failure = (error)=>{
    return{
        type:ADD_USER_FAILURE,
        payload : error
    }
}
export const update_user_request = ()=>{
    return{
        type:UPDATE_USER_REQUEST
    }
}
export const update_user_success = (users)=>{
    return{
        type:UPDATE_USER_SUCCESS,
        payload : users
    }
}
export const update_user_failure = (error)=>{
    return{
        type:UPDATE_USER_FAILURE,
        payload : error
    }
}
export const delete_user_request = ()=>{
    return{
        type:DELETE_USER_REQUEST
    }
}
export const delete_user_success = (users)=>{
    return{
        type:DELETE_USER_SUCCESS,
        payload : users
    }
}
export const delete_user_failure = (error)=>{
    return{
        type:DELETE_USER_FAILURE,
        payload : error
    }
}
// Function to implement thunk

export const fetch_users=()=>{
    return function(dispatch){
        // Loading request
        dispatch(fetch_user_request())
        axios.get("http://localhost:8888/users").then((res)=>{
           
        // Success request execute
            const users=res.data
            dispatch((fetch_user_success(users)))
        }).catch((error)=>{

            dispatch(fetch_user_failure(error.message))
        })
    }
}

export const delete_user = (id)=>{
    return function(dispatch){
        axios.delete(`http://localhost:8888/users/${id}`).then((res)=>{
            dispatch(fetch_users())
        }).catch((error)=>{
            dispatch(delete_user_failure(error.message))
        })
    }
}

export const update_user = (id)=>{
    return function(dispatch){
        axios.put(`http://localhost:8888/users/${id}`).then((res)=>{
            dispatch(update_user_success())
        }).catch((error)=>{
            dispatch(update_user_failure(error.message))
        })
    }
}