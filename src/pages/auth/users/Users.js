import React,{useState,useEffect} from "react";
import { Helmet } from "react-helmet";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";

const Users =()=>{

    const [data , setData] = useState([]);
    const token = useSelector(state => state.admins.admin.access_token);

    const fetchData = async () => {

        try{
            const config = {
                headers:{
                    "x-auth":token,
                    "Authorization":`Bearer ${token}`,
                    "Content-Type": "application/json" ,
                    "Access-Control-Allow-Headers":"origin, content-type, accept, authorization",
                    "Access-Control-Allow-Origin":"*"
                }
            };

            console.log('token : ',token);

            await axios.get('https://pke.iran-sign.com/api/v1/admin/userList/',config)
                .then(res =>{
                    if(res.status === 200){
                        setData(res.data);
                        console.log(res.data);
                    }else {
                        console.log(res.status);
                        alert(res.status);
                    }
                }).catch((e)=>{
                    console.log(e);
                })


        }catch (e){
            console.log(e);
            alert(e);
        }
    };

    useEffect(()=>{

        fetchData();

    },[]);

     const handleSetToken = (ids) =>{
         if(data.findIndex((val)=> val.id === ids.id) !== -1){
              window.sessionStorage.setItem('slotId',ids);
              console.log(ids);
         }
         window.location.href='/addToken';
     }

     const handleRemove =()=>{

     }

    return(
        <>
            <Helmet>
                <title>
                    نمایش کاربران
                </title>
            </Helmet>
            <div className="col-lg-12 col-sm-12" style={{padding:'10px 20px'}}>
                <div style={{direction:'ltr'}}>
                    <NavLink to={'/'}>
                        <button className="btn btn-danger" style={{margin:'20px',direction:'ltr'}}
                        > خروج
                        </button>
                    </NavLink>
                </div>
                <NavLink to={'/addUser'}>
                    <button className="btn btn-warning" style={{marginTop:'-100px'}}
                    > ثبت کاربر جدید
                    </button>
                </NavLink>



                    <div  className='table-responsive' style={{margin:'0 auto'}}>
                        <table className='table table-bordered'>
                            <thead className='table-success'>
                            <tr style={{backgroundColor:'#2e6da4'}}>
                                <th scope="col" style={{ textAlign: 'center',color:'white' }}>نام</th>
                                <th scope="col" style={{ textAlign: 'center' ,color:'white'}}> نام خانوادگی</th>
                                <th scope="col" style={{ textAlign: 'center',color:'white' }}>کدملی</th>
                                <th scope="col" style={{ textAlign: 'center',color:'white' }}>توکن</th>
                            </tr>
                            </thead>
                            {data.map((p)=>(
                                <tbody>
                                <tr style={{backgroundColor:'white'}}>
                                    <td style={{ width: '200px', textAlign: 'center' ,padding:'10px' }} >{p.name}</td>
                                    <td style={{ width: '200px', textAlign: 'center' ,padding:'10px' }} >{p.family}</td>
                                    <td style={{ width: '200px', textAlign: 'center' ,padding:'10px' }} >{p.nationalCode}</td>
                                    <td style={{ width: '200px', textAlign: 'center' ,padding:'10px' }} >
                                        {p.tokenSaved ? <button className="btn btn-success" disabled > توکن دارد </button>
                                        :
                                            
                                                <button className="btn btn-info" onClick={()=> handleSetToken(p.userId)}> ثبت توکن</button>
                                           

                                        }


                                    </td>
                                </tr>
                                </tbody>
                            ))}
                        </table>

                    </div>

            </div>
        </>
    );
}

export default Users;