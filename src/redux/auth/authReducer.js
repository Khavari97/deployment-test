import {actionTypes} from "./actionTypes";

const initialState = {
    admin:{
        access_token : '',
        token_type : '',
        refresh_token : '',
        expires_in : '',
        scope : '',
        jti : '',
        username :'',
        fullName :'',
        userStatus :''
    },
    code:{
        userId:''
    }
};

export const AuthReducer =(state =initialState , action)=>{
    console.log(action);
    switch (action.type){
        case actionTypes.REFRESH :
            return{
                ...state ,
                code: action.payload
            };
        case actionTypes.TOKEN:
            return {
                ...state ,
                admin :action.payload
            };
        default :
            return state;
    }
};