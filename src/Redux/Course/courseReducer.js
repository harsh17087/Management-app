
import { FETCH_COURSE_FAILURE,FETCH_COURSE_REQUEST,FETCH_COURSE_SUCCESS,DELETE_COURSE_FAILURE,DELETE_COURSE_REQUEST,DELETE_COURSE_SUCCESS } from "./courseType";


const initialState = {
    loading : false,
    data: [],
    error : ""
}

const courseReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_COURSE_REQUEST : return {
            ...state,
            loading : true
        }

        case FETCH_COURSE_SUCCESS : return {
            ...state,
            loading : false,
            data : action.payload
        }

        case FETCH_COURSE_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        
        case DELETE_COURSE_REQUEST : return {
            ...state,
            loading : true
        }
        case DELETE_COURSE_SUCCESS : return {
            loading : false,
            data : action.payload
        }
        case DELETE_COURSE_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        default : return state
    }
}

export default courseReducer