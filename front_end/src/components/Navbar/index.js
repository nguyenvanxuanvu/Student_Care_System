import React, { useState } from 'react';
import logo from '../../images/logo.png';
import './Navbar.css'

import {  NavDropdown } from 'react-bootstrap'
import { IoCall, GiPositionMarker, AiFillCaretDown } from 'react-icons/all'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    
  
    

  return (
    <>
      <div class="row topinfo">
      <div class="col">
      <div class="d-flex align-items-start ps-3">
            <IoCall style={{color: "rgba(255, 255, 255, 1)"}}/>
          <p style={{color: "rgba(255, 255, 255, 1)"}} 
>Liên hệ: (012)1234567 - 073654321</p>
          </div>
      
    </div>
    <div class="col">
    <div class="d-flex align-items-start">
            <GiPositionMarker style={{color: "rgba(255, 255, 255, 1)"}}/>
          <p style={{color: "rgba(255, 255, 255, 1)"}}>Địa chỉ: VP 212, Tòa A10, Trường ĐH XYZ TP. Hồ Chí Minh</p>
          </div>
    </div>
    <div class="col align-items-end">
    <div class="d-flex ps-5">
            
          <p style={{color: "rgba(255, 255, 255, 1)"}}>Ngôn ngữ</p>

          </div>
        </div>
      </div>
      <Nav>
        <NavLink to='/'>
        <img className="logo" src={logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Trang chủ
          </NavLink>
          {/* <NavLink to='/information' activeStyle>
            Thông tin
          </NavLink> */}
          <div class ="nadropdown">
          <NavDropdown  title={<span className="text-thongtin">Thông tin</span>} activeStyle>
              <NavDropdown.Item href="/news">Tin tức</NavDropdown.Item>
              <NavDropdown.Item href="/job">Việc làm</NavDropdown.Item>
              <NavDropdown.Item href="/scholarship">Học bổng</NavDropdown.Item>
             
            </NavDropdown>
            </div>
          <NavLink to='/event' activeStyle>
            Sự kiện
          </NavLink>
          <NavLink to='/instruction' activeStyle>
            Hướng dẫn
          </NavLink>
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Đăng nhập</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;