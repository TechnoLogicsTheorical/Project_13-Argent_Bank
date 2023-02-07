import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserCredential } from '../utils/redux/features/userCredential.slice.js';
import { putProfileDetails } from '../utils/services/callAPI.js';

const HeaderContainer = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

const AccountContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin: 0 auto 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const AccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

const AccountContentWrapperCTA = styled(AccountContentWrapper)`
  @media (min-width: 720px) {
    flex: 0;
  }
`;

const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AccountAmountDescription = styled.p`
  margin: 0;
`;

const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  @media (min-width: 720px) {
    width: 200px;
  }
`;

const GreetingTitle = styled.h1``;

const ModifiedUserContainer = styled.form`
  margin: 20px auto;
`;

const InputWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 166px;
  height: 33px;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 3px solid #B3BCC7;
  font-size: 16px;
  color: #838586;
`;

const InputButton = styled(Input)`
  width: 100px;
  color: #7171EF;
  border-color: #A9ACEA;
  font-size: 12px;
`;

export default function Profile() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const isLogged = useSelector( (state) => state.userLogged.isLogged);
    const token = useSelector((state) => state.userCredential.token);

    const [editMode, setEditMode] = useState(false);

    const [firstName, setFirstName] = useState(useSelector(state => state.userCredential.firstName));
    const [lastName, setLastName] = useState(useSelector(state => state.userCredential.lastName))

    useEffect( () => {
        if (!isLogged) {
            navigate('/login');
        }
    }, [isLogged]);

    function changeMode() {
        setEditMode(!editMode);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const userDetails = {
            firstName,
            lastName,
        }

        const requestResult = await putProfileDetails(token, userDetails);
        if (requestResult.status === 200) {
            dispatch(setUserCredential(userDetails));
            setEditMode(false);
        }
    }

    return (
        <main className="main bg-dark">
            <HeaderContainer>
                {
                    editMode ?
                        (
                            <>
                                <GreetingTitle>
                                    Welcome back<br />
                                </GreetingTitle>
                                <ModifiedUserContainer onSubmit={ handleSubmit}>
                                    <InputWrapper>
                                        <Input
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            id="firstName"
                                        />
                                        <Input
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            id="lastName"
                                        />
                                    </InputWrapper>

                                    <InputWrapper>
                                        <InputButton
                                            type="submit"
                                            value="Save"
                                        />
                                        <InputButton
                                            type="reset"
                                            value="Cancel"
                                            onClick={changeMode}
                                        />
                                    </InputWrapper>
                                </ModifiedUserContainer>
                            </>
                        ) : (
                            <>
                                <GreetingTitle>
                                    Welcome back<br />
                                    {firstName + ' ' + lastName}!
                                </GreetingTitle>
                                <EditButton onClick={ changeMode }>Edit Name</EditButton>
                            </>
                        )
                }

            </HeaderContainer>
            <h2 className="sr-only">Accounts</h2>
            <AccountContainer>
                <AccountContentWrapper>
                    <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
                    <AccountAmount>$2,082.79</AccountAmount>
                    <AccountAmountDescription>Available Balance</AccountAmountDescription>
                </AccountContentWrapper>
                <AccountContentWrapperCTA>
                    <TransactionButton>View transactions</TransactionButton>
                </AccountContentWrapperCTA>
            </AccountContainer>
            <AccountContainer>
                <AccountContentWrapper>
                    <AccountTitle>Argent Bank Savings (x6712)</AccountTitle>
                    <AccountAmount>$10,928.42</AccountAmount>
                    <AccountAmountDescription>Available Balance</AccountAmountDescription>
                </AccountContentWrapper>
                <AccountContentWrapperCTA>
                    <TransactionButton>View transactions</TransactionButton>
                </AccountContentWrapperCTA>
            </AccountContainer>
            <AccountContainer>
                <AccountContentWrapper>
                    <AccountTitle>Argent Bank Credit Card (x8349)</AccountTitle>
                    <AccountAmount>$184.30</AccountAmount>
                    <AccountAmountDescription>Current Balance</AccountAmountDescription>
                </AccountContentWrapper>
                <AccountContentWrapperCTA>
                    <TransactionButton>View transactions</TransactionButton>
                </AccountContentWrapperCTA>
            </AccountContainer>
        </main>
    )
}