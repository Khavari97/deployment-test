import React, {useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import {useSelector,useDispatch} from "react-redux";
import {Admin} from "../../../redux/auth/action";
import axios from "axios";
import qs from 'qs';

const SignIn =()=>{

    const [username , setUsername] = useState('administrator');
    const [password , setPassword] = useState('#irsign-admin@');
    const dispatch = useDispatch();

    const handleSubmit = async event =>{
        event.preventDefault();
        var grantType = 'password';
    
        const user = { username , password , grantType };
        const qs = require('qs');
        try{

            await axios.post('https://pke.iran-sign.com/api/v1/adminLogin/',qs.stringify(user),
                {
                    headers:{
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then((response)=>{
                if(response.status === 200){
                             console.log(response.data);
                             var token = response.data;
                             dispatch(Admin(token));
                             console.log(user);
                             window.location.href="/user";
                }else{
                    console.log(response.status);
                    alert(response.status);
                }

            }).catch(e =>{
                console.log(e);
                alert(e);
            })
        }catch(e){
            console.log(e);
        }
    }
    return(
        <>
        <Helmet>
            <title>
                ورود
            </title>
        </Helmet>
        <main className="client-page">
            <div className="container-content">
                <div className="form-layer">
                    <form onSubmit={handleSubmit}>
                        <div  className="input-group">
                                <span  className="input-group-addon"><i  className="zmdi zmdi-account"></i></span>
                                <input type="text"
                                       className="form-control"
                                       placeholder="نام کاربری"
                                       value={username}
                                       onChange={e => setUsername(e.target.value)}
                                />
                        </div>
                        <div  className="input-group">
                                <span  className="input-group-addon"><i  className="zmdi zmdi-account"></i></span>
                                <input type="password"
                                       className="form-control"
                                       placeholder="رمز عبور"
                                       value={password}
                                       onChange={e => setPassword(e.target.value)}
                                />
                        </div>
                        <button  className="btn btn-primary"> ورود </button>                          
                    </form>
                </div>
            </div>
        </main>
        </>
    );
}

export default SignIn;