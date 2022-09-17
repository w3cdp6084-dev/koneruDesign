import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  flex-flow: row nowrap;
  display:none; 
  li {
    padding: 18px 10px;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index:10;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>CONTACT</li>
    </Ul>
  )
}

export default RightNav