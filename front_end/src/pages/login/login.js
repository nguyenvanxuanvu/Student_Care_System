
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
        
        if(pwd==='1'){

        
        // localStorage.setItem("email", email);
        localStorage.setItem("type1","true")
        setAuth(true);
        localStorage.setItem("userid",ID);
        }
        if(pwd==='2'){

        
            // localStorage.setItem("email", email);
            localStorage.setItem("type2","true")
            setAuth(true);
            }
        }
        
    

    
    return (
        <div className='loginContainer'>
            <form method="post">
                <div className='center'>
                    <p className='headerFont'>Đăng nhập</p>
                </div>
                <div className='mb-3'>                    
                        <label className='labelForm' ><span className='star'>*</span>Tên đăng nhập</label>               
                        <input  type='text' class="form-control"  onChange={(event) => ID = event.target.value} />             
                </div>
                <div className='mb-3'>
                        <label className='labelForm'><span className='star'>*</span>Mật khẩu</label>
                        <input type='password' class="form-control" onChange={(event) => pwd = event.target.value}/>
                </div>
                <div className='center addMargin' onClick={submitLogin}>
                    <button type="submit" class="btn btn-primary" onClick={submitLogin}>Đăng nhập</button>
                    
                
                </div>
            </form>
            <div className='center addMargin'>
                <p>Quên mật khẩu? <span><Link to='/forgetPass' className='star'>Nhấn tại đây</Link> </span> </p>
            </div>
            <div className='center addMargin'>
                <p>Bạn chưa có tài khoản? <span><Link to='/signUp' className='star'>Đăng ký</Link> </span> </p>
            </div>
            
        </div>
    )
}

