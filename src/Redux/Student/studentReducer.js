import { FETCH_STUDENT_REQUEST,FETCH_STUDENT_FAILURE,FETCH_STUDENT_SUCCESS,DELETE_STUDENT_FAILURE,DELETE_STUDENT_REQUEST,DELETE_STUDENT_SUCCESS } from "./studentType";

const initialState = {
    loading : false,
    data: [],
    error : ""
}

const studentReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_STUDENT_REQUEST : return {
            ...state,
            loading : true
        }

        case FETCH_STUDENT_SUCCESS : return {
            ...state,
            loading : false,
            data : action.payload
        }

        case FETCH_STUDENT_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        
        case DELETE_STUDENT_REQUEST : return {
            ...state,
            loading : true
        }
        case DELETE_STUDENT_SUCCESS : return {
            loading : false,
            data : action.payload
        }
        case DELETE_STUDENT_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        default : return state
    }
}

export default studentReducer