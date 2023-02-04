import React from 'react';
import styled from 'styled-components';

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

export default function Login() {
    return (
        <main className="main bg-dark">
            <SignInContent>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <InputWrapper>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input type="text" id="username" />
                    </InputWrapper>
                    <InputWrapper>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input type="password" id="password" />
                    </InputWrapper>
                    <InputRemember>
                        <input type="checkbox" id="remember-me" />
                        <InputRememberLabel htmlFor="remember-me">Remember me</InputRememberLabel>
                    </InputRemember>
                    {
                        // PLACEHOLDER DUE TO STATIC SITE
                        //<a href="user.html" className="sign-in-button">Sign In</a>
                        //
                        // SHOULD BE THE BUTTON BELOW
                        //
                    }
                    <ButtonSignIn>Sign In</ButtonSignIn>
                </form>
            </SignInContent>
        </main>
    )
}