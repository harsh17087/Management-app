import { createStore, combineReducers } from "redux";

import userReducer from "./User/userReducer";
import courseReducer from './Course/courseReducer'
import employeeReducer from './Employee/employeeReducer'
import branchReducer from './Branch/branchReducer'
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";
import studentReducer from "./Student/studentReducer";
// const redux = require('redux')
// const applyMiddleware = redux.applyMiddleware


const rootReducer = combineReducers({
    
    user : userReducer,
    course : courseReducer,
    employee : employeeReducer,
    branch : branchReducer,
    student : studentReducer
})
const store = createStore(rootReducer , applyMiddleware(thunk))


export default store