import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";
import {BsCalendarCheck} from 'react-icons/all';
import {BiMessageDetail} from 'react-icons/all';
import {FaPhoneSquareAlt} from 'react-icons/all';
import { NavDropdown } from "react-bootstrap";
import { IoCall, GiPositionMarker, AiFillCaretDown } from "react-icons/all";
import { Redirect } from "react-router";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar2 = ({ auth, setAuth }) => {
function logOut() {
    localStorage.removeItem("email");
    localStorage.removeItem("type1");
    localStorage.removeItem("type2");
    localStorage.removeItem("type3");
    localStorage.removeItem("userid");
    localStorage.removeItem("callhistory");
    setAuth(false);
    <Redirect to="/login" />

    
  }
  

  return (
    <Nav>
    <NavLink to="/">
      <img className="logo" src={logo} alt="logo" />
    </NavLink>
    <Bars />
    <NavMenu>
      {localStorage.getItem("language") && (<NavLink to="/home" activeStyle>
        Trang chủ
      </NavLink>)}
      {!localStorage.getItem("language") && (<NavLink to="/home" activeStyle>
        Home
      </NavLink>)}
      {/* <NavLink to='/information' activeStyle>
        Thông tin
      </NavLink> */}
      <div class="nadropdown">
      {localStorage.getItem("language") &&(<NavDropdown
          title={<span className="text-thongtin">Thông tin</span>}
          activeStyle
        >
          <NavDropdown.Item href="/news">Tin tức</NavDropdown.Item>
          <NavDropdown.Item href="/job">Việc làm</NavDropdown.Item>
          <NavDropdown.Item href="/scholarship">Học bổng</NavDropdown.Item>
        </NavDropdown>)}
        {!localStorage.getItem("language") && (<NavDropdown
          title={<span className="text-thongtin">Information</span>}
          activeStyle
        >
          <NavDropdown.Item href="/news">News</NavDropdown.Item>
          <NavDropdown.Item href="/job">Job</NavDropdown.Item>
          <NavDropdown.Item href="/scholarship">Scholarship</NavDropdown.Item>
        </NavDropdown>)}
      </div>
      {localStorage.getItem("language") &&(<NavLink to="/event" activeStyle>
        Sự kiện
      </NavLink>)}
      {!localStorage.getItem("language") &&(<NavLink to="/event" activeStyle>
        Event
      </NavLink>)}
      {localStorage.getItem("language") &&(<NavLink to="/instruction" activeStyle>
        Chúng tôi
      </NavLink>)}
      {!localStorage.getItem("language") &&(<NavLink to="/instruction" activeStyle>
        About us
      </NavLink>)}
    </NavMenu>
    
    
    { auth? 
    ( 

      
      <div class="row">
        <div class="col pt-2">
        {localStorage.getItem("type2") && (<NavLink to='/addCall' class="iconnn  pe-1">{<FaPhoneSquareAlt size={28}/>}</NavLink>)}
      </div>
        <div class="col-auto pt-2">
      
      {localStorage.getItem("type1") && (<NavLink to='/appointmentlist' class="iconnn  pe-1">{<BsCalendarCheck size={25}/>}</NavLink>)}
      {localStorage.getItem("type2") && (<NavLink to='/appointmentlist1' class="iconnn  pe-1">{<BsCalendarCheck size={25}/>}</NavLink>)}
      

      
      </div>
      <div class="col pt-2">

      {localStorage.getItem("type1") && (<NavLink to='/message' class="iconnn  pe-1">{<BiMessageDetail size={32}/>}</NavLink>)}

      {localStorage.getItem("type2") && (<NavLink to='/replies' class="iconnn  pe-1">{<BiMessageDetail size={32}/>}</NavLink>)}
      
      
      
      
      
      </div>
      <div class="col">
        <div class="nadropdown">
        
        {localStorage.getItem("type1") && localStorage.getItem("language") && (<NavDropdown
          title={<span className="text-thongtin">Tài khoản</span>}
          activeStyle
        >
          <NavDropdown.Item href={"/user/"+localStorage.getItem("userid")}>Thông tin cá nhân</NavDropdown.Item>
              <NavDropdown.Item href={"/representative/"+ localStorage.getItem("userid")}>Thông tin người đại diện</NavDropdown.Item>
              
              <NavDropdown.Item href="/home" onClick={logOut}>Đăng xuất</NavDropdown.Item>
        </NavDropdown>)}


        {localStorage.getItem("type1") && !localStorage.getItem("language") && (<NavDropdown
          title={<span className="text-thongtin">Account</span>}
          activeStyle
        >
          <NavDropdown.Item href={"/user/"+localStorage.getItem("userid")}>Personal information</NavDropdown.Item>
              <NavDropdown.Item href={"/representative/"+ localStorage.getItem("userid")}>Agent information</NavDropdown.Item>
              
              <NavDropdown.Item href="/home" onClick={logOut}>Log Out</NavDropdown.Item>
        </NavDropdown>)}

        {localStorage.getItem("type2") && localStorage.getItem("language") && (<NavDropdown
          title={<span className="text-thongtin">Tài khoản</span>}
          activeStyle
        >
          <NavDropdown.Item href={"/staffInfo/"+localStorage.getItem("userid")}>Thông tin cá nhân</NavDropdown.Item>
              
              
              <NavDropdown.Item href="/home" onClick={logOut}>Đăng xuất</NavDropdown.Item>
        </NavDropdown>)}

        {localStorage.getItem("type2") && !localStorage.getItem("language") && (<NavDropdown
          title={<span className="text-thongtin">Account</span>}
          activeStyle
        >
          <NavDropdown.Item href={"/staffInfo/"+localStorage.getItem("userid")}>Personal information</NavDropdown.Item>
              
              
              <NavDropdown.Item href="/home" onClick={logOut}>Log Out</NavDropdown.Item>
        </NavDropdown>)}

        {localStorage.getItem("type3") && localStorage.getItem("language") && (<NavDropdown
          title={<span className="text-thongtin">Tài khoản</span>}
          activeStyle
        >
          <NavDropdown.Item href={"/affairInfo/"+localStorage.getItem("userid")}>Thông tin cá nhân</NavDropdown.Item>
              
              
              <NavDropdown.Item href="/home" onClick={logOut}>Đăng xuất</NavDropdown.Item>
        </NavDropdown>)}


        
        {localStorage.getItem("type3") && !localStorage.getItem("language") && (<NavDropdown
          title={<span className="text-thongtin">Account</span>}
          activeStyle
        >
          <NavDropdown.Item href={"/affairInfo/"+localStorage.getItem("userid")}>Personal information</NavDropdown.Item>
              
              
              <NavDropdown.Item href="/home" onClick={logOut}>Log Out</NavDropdown.Item>
        </NavDropdown>)}

      

      </div>
      </div>
      </div>
      )
    
    :(<NavBtn>
      <NavLink to='/login' class="btn btn-primary align-items-center">Đăng nhập</NavLink>
    </NavBtn>)
      }
      


  </Nav>
  )
}
export default Navbar2



