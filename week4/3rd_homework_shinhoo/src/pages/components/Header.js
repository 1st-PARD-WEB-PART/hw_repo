import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaPeopleCarry, FaGamepad, FaFacebook } from "react-icons/fa";

import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #FFFFFF;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 7px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  background: #FFFFFF;
`;

const SearchInput = styled.input`
  background-color: #F0F2F5;
  border: none;
  padding: 10px;
  margin: 5px;
  border-radius: 15px;
  width: 50px;
  flex: 0.2 1;
`;



const SearchButton = styled.button`
  padding: 3px;
  background-color: #007bff;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
  border: none;
  width: 100px;
  flex: 0.04 1;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  
`;

const NavigationLinks = styled.div`
  display: flex;
  background: #FFFFFF;
`;



const AppHeader = () => {
  return (
        <Header>
        <FaFacebook color="blue" />
        <SearchInput type="text" id="search" name="search" placeholder="FaceBook 검색" />
        <SearchButton>검색</SearchButton>
        <NavigationLinks>
            <NavItem id={0} icon = {<FaHome height={32} width={32}/>}/>
            <NavItem id={1} icon = {<FaPeopleCarry height={32} width={32}/>}/>
            <NavItem id={2} icon = {<FaGamepad height={32} width={32}/>}/>
        </NavigationLinks>
      </Header>
  );
};
const NavItem = ({ id, icon}) => {
    const activeStyle = {
      color: 'blue',
      height: 32,
      width: 32,
    };
    const inactiveStyle = {
        color: 'grey',
      };
    return (
      <li>
        <NavLink
          to={`${id}`}
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
        {icon}
        </NavLink>
      </li>
    );
  };

export default AppHeader;