import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
const SITE_URL =  process.env.REACT_APP_SITE_URL;
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={SITE_URL+"images/logo.png"} className="my-logo" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 3rem;
  }
  .my-logo{
    width:80%;
  }
`;
export default Header;
