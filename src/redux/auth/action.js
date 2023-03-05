import {actionTypes} from "./actionTypes";

export const Register =(register)=>{
    return{
        type : actionTypes.REGISTER ,
        payload : register
    }
};

export const Login =(login)=>{
    return{
        type : actionTypes.LOGIN ,
        payload : login
    }
};

export const Admin =(token)=>{
    return{
        type : actionTypes.TOKEN , 
        payload : token
    }
};

export const RefreshToken =(token)=>{
    return{
        type : actionTypes.REFRESH ,
        payload : token
    }
};