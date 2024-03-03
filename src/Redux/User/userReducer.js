
import { FETCH_USER_REQUEST,FETCH_USER_FAILURE,FETCH_USER_SUCCESS,
    DELETE_USER_FAILURE,DELETE_USER_REQUEST,DELETE_USER_SUCCESS,
    UPDATE_USER_FAILURE,UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,
    ADD_USER_FAILURE,ADD_USER_REQUEST,ADD_USER_SUCCESS } from "./userType";

const initialState = {
    loading : false,
    data: [],
    error : ""
}

const userReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST : return {
            ...state,
            loading : true
        }

        case FETCH_USER_SUCCESS : return {
            ...state,
            loading : false,
            data : action.payload
        }

        case FETCH_USER_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        case ADD_USER_REQUEST : return {
            ...state,
            loading : true
        }
        case ADD_USER_SUCCESS : return {
            loading : false,
            data : action.payload
        }
        case ADD_USER_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        case UPDATE_USER_REQUEST : return {
            ...state,
            loading : true
        }
        case UPDATE_USER_SUCCESS : return {
            loading : false,
            data : action.payload
        }
        case UPDATE_USER_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        case DELETE_USER_REQUEST : return {
            ...state,
            loading : true
        }
        case DELETE_USER_SUCCESS : return {
            loading : false,
            data : action.payload
        }
        case DELETE_USER_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        default : return state
    }
}

export default userReducer