
import './login.css'
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';

export default function Login({auth, setAuth}) {
    var history = useHistory();
    var ID= "";
    var pwd = "";
    localStorage.setItem("email", "vu.nguyenxuanvu231");
    function submitLogin(e) {
        e.preventDefault();
       
        console.log(pwd);
        
        if(pwd==='1111'){

        
        // localStorage.setItem("email", email);
        localStorage.setItem("type1","true")
        setAuth(true);
        localStorage.setItem("userid",ID);
        }
        if(pwd==='2222'){

        
            // localStorage.setItem("email", email);
            localStorage.setItem("type2","true")
            setAuth(true);
            localStorage.setItem("userid",ID);
            }
        
        if(pwd==='3333'){

        
            // localStorage.setItem("email", email);
            localStorage.setItem("type3","true")
            setAuth(true);
            localStorage.setItem("userid",ID);
            }
        }
        
    

    
    return (
        <div className='loginContainer'>
            <form method="post">
                <div className='center'>
                    <p className='headerFont'>{localStorage.getItem("language")? "Đăng nhập":"Log in"}</p>
                </div>
                <div className='mb-3'>                    
                        <label className='labelForm' ><span className='star'>*</span>{localStorage.getItem("language")? "Tên đăng nhập":"User name"}</label>               
                        <input  type='text' class="form-control"  onChange={(event) => ID = event.target.value} />             
                </div>
                <div className='mb-3'>
                        <label className='labelForm'><span className='star'>*</span>{localStorage.getItem("language")? "Mật khẩu":"Password"}</label>
                        <input type='password' class="form-control" onChange={(event) => pwd = event.target.value}/>
                </div>
                <div className='center addMargin' onClick={submitLogin}>
                    <button type="submit" class="btn btn-primary" onClick={submitLogin}>{localStorage.getItem("language")? "Đăng nhập":"Log in"}</button>
                    
                
                </div>
            </form>
            <div className='center addMargin'>
                <p>Quên mật khẩu? <span><Link to='/forgetPass' className='star'>{localStorage.getItem("language")? "Nhấn tại đây":"Press here"}</Link> </span> </p>
            </div>
            <div className='center addMargin'>
                <p>Bạn chưa có tài khoản? <span><Link to='/signUp' className='star'>{localStorage.getItem("language")?"Đăng ký":"Register"}</Link> </span> </p>
            </div>
            
        </div>
    )
}

