import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1400px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color:  rgba(0, 63, 107, 1);
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color:  rgba(0, 63, 107, 1);
  ;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 20px;
  border: double;
  border-color:rgba(0, 63, 107, 1) ;
  background: rgba(255, 255, 255, 1);
  ;
  padding: 8px 18px;
  color: rgba(0, 153, 195, 1);
  font-weight: 500;
  outline: none;
  
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(0, 63, 107, 1);
    color: #010606;
  }
`;