import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";
import Navbar2 from "./Navbar2";
import {BsCalendarCheck} from 'react-icons/all';
import {BiMessageDetail} from 'react-icons/all';
import { NavDropdown } from "react-bootstrap";
import { IoCall, GiPositionMarker, AiFillCaretDown } from "react-icons/all";

// import { NavLink } from "react-router-dom";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { useParams } from "react-router";

const Navbar = ({ auth, setAuth }) => {
  let {id} = useParams();
  // ({ auth, setAuth })
  // function logOut() {
  //   localStorage.removeItem("email");
  //   setAuth(false);
  // }
  const [contact,setcontact] = useState(true)
  function ChangLanguageVI() {
    setcontact(true)
    localStorage.setItem("language","VI");
  }
  function ChangLanguageEN() {
    setcontact(false)
    localStorage.removeItem("language");
}
    
  

  return (
    <>
      <div class="row topinfo">
        <div class="col">
          <div class="d-flex align-items-start ps-3">
            <IoCall style={{ color: "rgba(255, 255, 255, 1)" }} />
            {contact &&
            (<p style={{ color: "rgba(255, 255, 255, 1)" }}>
              Liên hệ: (012)1234567 - 073654321
            </p>)}
            {!contact &&
            (<p style={{ color: "rgba(255, 255, 255, 1)" }}>
              Contact: (012)1234567 - 073654321
            </p>)}
          </div>
        </div>
        <div class="col">
          <div class="d-flex align-items-start">
          <div class="ps-2"></div>
            <GiPositionMarker style={{ color: "rgba(255, 255, 255, 1)" }} />
            
           {contact && (<p style={{ color: "rgba(255, 255, 255, 1)" }}>
              Địa chỉ: VP 212, Tòa A10, Trường ĐH XYZ TP. Hồ Chí Minh
            </p>)}
            {!contact && (<p style={{ color: "rgba(255, 255, 255, 1)" }}>
              Address: Office 212, A10 Building, XYZ University Ho Chi Minh City
            </p>)}
          </div>
        </div>
        
        <div class="col align-items-end">
          <div class="d-flex ps-5">
          <div class="ps-5"></div>
          <div class="ps-5"></div>
          <div class="ps-5"></div>
          <div class="ps-5"></div>
          <div class="ps-5"></div>
          
             {contact && (<p style={{ color: "rgba(255, 255, 255, 1)" }}>Ngôn ngữ</p>)}
            {!contact && (<p style={{ color: "rgba(255, 255, 255, 1)" }}>Language</p>)}
            <div class = "ps-2"></div>
             
            
             { window.location.pathname==="/home"  && (<NavLink to="/homeAll" activeStyle>
            <p  onClick={
                    ChangLanguageVI
                  } style={{fontWeight: "600", color: "red" }}>VI</p>
            <div class = "ps-2"></div>
            <p  onClick=
            {ChangLanguageEN} style={{ color: "red" ,fontWeight: "600"}}>EN</p>
            
            </NavLink> )} 
            
            
 { window.location.pathname !=="/home" && (<NavLink to="/home" activeStyle>
            <p  onClick={
                    ChangLanguageVI
                  } style={{fontWeight: "600", color: "red" }}>VI</p>
            <div class = "ps-2"></div>
            <p  onClick=
            {ChangLanguageEN} style={{ color: "red" ,fontWeight: "600"}}>EN</p>
            
            </NavLink> )} 


                
          </div>
        </div>
      </div>
      <Navbar2 auth={auth} setAuth={setAuth}></Navbar2>
      
    </>
  );
};
export default Navbar;
