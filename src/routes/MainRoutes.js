import React from "react";
import {Route,Routes} from "react-router-dom";
import SignIn from "../pages/auth/signin/SignIn";
import Users from "../pages/auth/users/Users";
import AddUser from "../pages/auth/users/AddUser";
import AddToken from "../pages/auth/users/AddToken";

const MainRoutes =()=>{
    return(
        <Routes>
            <Route path={'/'} element={<SignIn/>} exact />
            <Route path={'/user'} element={<Users/>} />
            <Route path={'addUser'} element={<AddUser/>} />
            <Route path={'/addToken'} element={<AddToken/>} />
        </Routes>
    );
}

export default MainRoutes;