import { FETCH_EMPLOYEE_FAILURE,FETCH_EMPLOYEE_REQUEST,FETCH_EMPLOYEE_SUCCESS,DELETE_EMPLOYEE_FAILURE,DELETE_EMPLOYEE_REQUEST,DELETE_EMPLOYEE_SUCCESS } from "./employeeType"

const initialState = {
    loading : false,
    data: [],
    error : ""
}

const employeeReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_EMPLOYEE_REQUEST : return {
            ...state,
            loading : true
        }

        case FETCH_EMPLOYEE_SUCCESS : return {
            ...state,
            loading : false,
            data : action.payload
        }

        case FETCH_EMPLOYEE_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        
        case DELETE_EMPLOYEE_REQUEST : return {
            ...state,
            loading : true
        }
        case DELETE_EMPLOYEE_SUCCESS : return {
            loading : false,
            data : action.payload
        }
        case DELETE_EMPLOYEE_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        default : return state
    }
}

export default employeeReducer