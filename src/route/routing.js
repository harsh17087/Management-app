import { createBrowserRouter } from "react-router-dom";
import LoginComp from "../Components/LoginComp";
import Dashboard from "../Components/Dashboard";
import CarouselImage from "../Components/CarouselImage";
import ProtectedRoute from "./ProtectedRoute";
import UserListComp from "../Components/UserListComp";
import CourseListComp from "../Components/CourseListComp";
import EmployeeListComp from "../Components/EmployeeListComp";
import BranchListComp from "../Components/BranchListComp"
import StudentListComp from "../Components/StudentListComp";
import AddStudentComp from "../Components/AddStudentComp";
import EditStudentComp from "../Components/EditStudentComp";
import AddBranchComp from "../Components/AddBranchComp";
import EditBranchComp from "../Components/EditBranchComp";
import EditEmployeeComp from "../Components/EditEmployeeComp";
import AddEmployeeComp from "../Components/AddEmployeeComp";
import EditCourseComp from "../Components/EditCourseComp";
import AddCourseComp from "../Components/AddCourseComp";
import AddUserComp from "../Components/AddUserComp";
import EditUserComp from "../Components/EditUserComp";
const router = createBrowserRouter([
    {path : "" , element : <LoginComp/>},
    {path : "home" , element : <ProtectedRoute RoutingComponent={Dashboard}/> ,children:[
        {path : "" , element : <ProtectedRoute RoutingComponent={CarouselImage}/>},
        {path : "students" , element : <ProtectedRoute RoutingComponent={StudentListComp}/>},
        {path : "courses" , element : <ProtectedRoute RoutingComponent={CourseListComp}/>},
        {path : "branches" , element : <ProtectedRoute RoutingComponent={BranchListComp}/>},
        {path : "employees" , element : <ProtectedRoute RoutingComponent={EmployeeListComp}/>},
        {path : "user" , element : <ProtectedRoute RoutingComponent={sessionStorage.user=='admin@gmail.com' && UserListComp}/>},
        {path : "addstudent" , element : <ProtectedRoute RoutingComponent={AddStudentComp}/>},
        {path : "editstudent/:id" , element : <ProtectedRoute RoutingComponent={EditStudentComp}/>},
        {path : "addbranch" , element : <ProtectedRoute RoutingComponent={AddBranchComp}/>},
        {path : "editbranch/:id" , element : <ProtectedRoute RoutingComponent={EditBranchComp}/>},
        {path : "addemp" , element : <ProtectedRoute RoutingComponent={AddEmployeeComp}/>},

        {path : "editemp/:id" , element : <ProtectedRoute RoutingComponent={EditEmployeeComp}/>},
        {path : "addcourse" , element : <ProtectedRoute RoutingComponent={AddCourseComp}/>},

        {path : "editcourse/:id" , element : <ProtectedRoute RoutingComponent={EditCourseComp}/>},
        {path : "adduser" , element : <ProtectedRoute RoutingComponent={sessionStorage.user=='admin@gmail.com' && EditUserComp}/>},
        {path : "edituser/:id" , element : <ProtectedRoute RoutingComponent={sessionStorage.user=='admin@gmail.com' && AddUserComp}/>}





    ]},













])

export default router