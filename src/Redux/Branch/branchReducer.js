import { FETCH_BRANCH_FAILURE,FETCH_BRANCH_REQUEST,FETCH_BRANCH_SUCCESS,DELETE_BRANCH_FAILURE,DELETE_BRANCH_REQUEST,DELETE_BRANCH_SUCCESS } from "./branchType";

const initialState = {
    loading : false,
    data: [],
    error : ""
}

const branchReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_BRANCH_REQUEST : return {
            ...state,
            loading : true
        }

        case FETCH_BRANCH_SUCCESS : return {
            ...state,
            loading : false,
            data : action.payload
        }

        case FETCH_BRANCH_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        
        case DELETE_BRANCH_REQUEST : return {
            ...state,
            loading : true
        }
        case DELETE_BRANCH_SUCCESS : return {
            loading : false,
            data : action.payload
        }
        case DELETE_BRANCH_FAILURE : return {
            loading : false,
            data : [],
            error : action.payload
        }
        default : return state
    }
}

export default branchReducer