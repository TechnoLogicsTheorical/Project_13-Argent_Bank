import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { getToken, getProfileDetails } from '../utils/services/callAPI.js';

import { setToken, setUserCredential } from '../utils/redux/features/userCredential.slice.js';
import { loggedIn } from '../utils/redux/features/userLogged.js';

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 3rem auto auto;
  padding: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const InputRemember = styled.div`
  display: flex;
`;

const InputRememberLabel = styled.label`
  margin-left: 0.25rem;
`;

const ButtonSignIn = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;

const ErrorLabel = styled.span`
  color: darkred;
  padding: 5px;
  font-size: 1.2rem;
`;

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogged = useSelector( (state) => state.userLogged.isLogged)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isLogged) {
            navigate('/profile');
        }
    }, [isLogged]);

    async function handleProfile(token) {
        const profileResult = await getProfileDetails(token);
        const profileDetails = {
            firstName: profileResult.body.firstName,
            lastName: profileResult.body.lastName,
        }
        dispatch(setUserCredential(profileDetails));
        dispatch(loggedIn())
    }

    async function handleToken(userDetails) {
        const tokenResult = await getToken(userDetails);
        if (tokenResult.status === 400) {
            setError(tokenResult.message);
        } else {
            setError(null);
            const newToken = tokenResult.body.token;
            dispatch(setToken({ token: newToken }))

            // Getting Profile Details
            await handleProfile(newToken);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const userDetails = {
            email: username,
            password: password,
        }

        handleToken(userDetails);
    }

    return (
        <main className="main bg-dark">
            <SignInContent>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {
                    error ?
                        (
                            <InputWrapper>
                                <ErrorLabel>{error}</ErrorLabel>
                            </InputWrapper>
                        ) : null
                }
                <form onSubmit={handleSubmit}>
                    <InputWrapper>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input
                            type="text"
                            id="username"
                            value={username}
                            onChange={ (e) => { setUsername(e.target.value) }}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={ (e) => { setPassword(e.target.value) }}
                        />
                    </InputWrapper>
                    <InputRemember>
                        <input type="checkbox" id="remember-me" />
                        <InputRememberLabel htmlFor="remember-me">Remember me</InputRememberLabel>
                    </InputRemember>
                    <ButtonSignIn>Sign In</ButtonSignIn>
                </form>
            </SignInContent>
        </main>
    )
}