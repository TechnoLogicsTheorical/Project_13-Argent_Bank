import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ArgentBankLogo from '../assets/img/argentBankLogo.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserCredential } from '../utils/redux/features/userCredential.slice.js';
import { resetCredential } from '../utils/redux/features/userCredential.slice.js';
import { logOut } from '../utils/redux/features/userLogged.js';

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
  margin-right: 20px;
  color: #2c3e50;
  display: inline-flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.i`
  font-size: 32px;
  margin-right: 0.5rem;
`;

export default function Header() {
    const dispatch = useDispatch();

    const isLogged = useSelector((state) => state.userLogged.isLogged);
    const firstName = useSelector((state) => state.userCredential.firstName);

    function handleDisconnect() {
        dispatch(resetCredential());
        dispatch(logOut());
    }

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

                {
                    isLogged ?
                        (
                            <>
                                <NavItem to="/profile">
                                    <Icon className="fa fa-user-circle"></Icon>
                                    {firstName}
                                </NavItem>
                                <NavItem to='/' onClick={handleDisconnect}>
                                    <Icon className="fa fa-sign-out"></Icon>
                                    Sign out
                                </NavItem>
                            </>
                        ) : (
                            <NavItem to="/login">
                                <Icon className="fa fa-user-circle"></Icon>
                                Sign In
                            </NavItem>
                        )

                }
            </div>
        </NavContainer>
    )
}