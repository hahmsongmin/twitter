import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ReadOnly = styled.h1`
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: -1;
  width: 1px;
  height: 1px;
  overflow: hidden;
  visibility: hidden;
`;

const Navigation = () => {
  return (
    <nav>
      <ReadOnly>Navigation bar</ReadOnly>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
