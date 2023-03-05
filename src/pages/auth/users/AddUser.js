import React,{useState} from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import {useSelector} from "react-redux";

const AddUser =()=>{

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [mobileNumber , setPhoneNumber] = useState('');
    const token = useSelector(state => state.admins.admin.access_token);

    const handleSubmit = async event =>{
        event.preventDefault();
        var ip = '192.168.1.25';
        console.log(token);

        const user = { username , password , firstName , lastName , mobileNumber , ip };
        const config = {
            headers:{
                "x-auth":token,
                "Authorization":`Bearer ${token}`,
                "Content-Type": "application/json" ,
            }
        };

        try{

            await axios.post('https://pke.iran-sign.com/api/v1/admin/user/',JSON.stringify(user),config).then((response)=>{
                if(response.status === 200){
                    console.log(response.data);
                    console.log(user);
                    alert('کاربر جدید با موفقیت ایجاد شد');
                    window.location.href="/user";
                }else{
                    console.log(response.status);
                    alert(response.status);
                }

            }).catch((e) =>{
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
                    ایجاد کاربر
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
                                       placeholder="نام "
                                       value={firstName}
                                       onChange={e => setFirstName(e.target.value)}
                                />
                            </div>
                            <div  className="input-group">
                                <span  className="input-group-addon"><i  className="zmdi zmdi-account"></i></span>
                                <input type="text"
                                       className="form-control"
                                       placeholder="نام خانوادگی"
                                       value={lastName}
                                       onChange={e => setLastName(e.target.value)}
                                />
                            </div>
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
                            <div  className="input-group">
                                <span  className="input-group-addon"><i  className="zmdi zmdi-phone"></i></span>
                                <input type="number"
                                       className="form-control"
                                       placeholder="شماره تلفن"
                                       value={mobileNumber}
                                       onChange={e => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            <button  className="btn btn-primary"> افزودن </button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AddUser;