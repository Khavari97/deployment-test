import React,{useState} from "react";
import axios from "axios";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";

const AddToken =()=>{

    const [tokenName , setToken]=useState('');
    const [slotId , setId]=useState('');
    const [keyAlias , setKeyAlias] = useState('');
    const token = useSelector(state => state.admins.admin.access_token);
     const userId = window.sessionStorage.getItem('slotId');
     console.log(userId);
    

    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(token);

        const user = { tokenName , slotId ,keyAlias};
        const config = {
            headers:{
                "x-auth":token,
                "Authorization":`Bearer ${token}`,
                "Content-Type": "application/json" ,
            }
        };
        try{
            console.log(user);

            await axios.post(`https://pke.iran-sign.com/api/v1/admin/${userId}/config/`,JSON.stringify(user),config).then((response)=>{
                if(response.status === 200){
                    console.log(response.data);
                    console.log(response.status);
                    alert('توکن با موفقیت ثبت شد');
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
                    ثبت توکن
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
                                       placeholder="نام توکن"
                                       value={tokenName}
                                       onChange={e => setToken(e.target.value)}
                                />
                            </div>
                            <div  className="input-group">
                                <span  className="input-group-addon"><i  className="zmdi zmdi-account"></i></span>
                                <input type="number"
                                       className="form-control"
                                       placeholder=" آیدی"
                                       value={slotId}
                                       onChange={e => setId(e.target.value)}
                                />
                            </div>
                            <div  className="input-group">
                                <span  className="input-group-addon"><i  className="zmdi zmdi-account"></i></span>
                                <input type="number"
                                       className="form-control"
                                       placeholder="keyAlias"
                                       value={keyAlias}
                                       onChange={e => setKeyAlias(e.target.value)}
                                />
                            </div>
                            <button  className="btn btn-primary"> ثبت </button>
                        </form>
                    </div>
                </div>
            </main>

        </>
    );
}

export default AddToken;