import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ArgentBankLogo from '../assets/img/argentBankLogo.png';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const NavLogo = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  color: #2c3e50;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
    return (
        <NavContainer>
            <NavLogo to="/">
                <LogoImage
                    src={ArgentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLogo>
            <div>
                <NavItem to="login">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavItem>
            </div>
        </NavContainer>
    )
}