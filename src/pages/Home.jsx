import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Title from '@common/Title';
import { useUserDispatch, useUserState } from '@contexts/UserContext';
import AuthApi from '@api/AuthApi';

const Container = styled.div`
  padding-top: 2.5rem;
`;

const Head = styled.div`
  width: 21rem;
`;

const Body = styled.div`
  margin-top: 5rem;
`;

const Button = styled.button`
  width: ${props => props.width || '21rem'};
  height: 5.188rem;
  padding: 0.875rem 2rem;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #d9fe96;
  cursor: pointer;

  font-family: Montserrat_Medium;
  font-size: 3rem;
  line-height: 1.15;
  letter-spacing: -2.4px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { memberId, isLogged } = useUserState();
  const dispatch = useUserDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await AuthApi.signUp();
      dispatch({
        type: 'LOGOUT'
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return <h1>로딩중</h1>;
  }

  if (error) {
    return <h1>에러</h1>;
  }

  return (
    <Container>
      <Head>
        <Title title="Color" />
        <Title title="My" />
        <Title title="BirthDay" />
        <Title title="Card!" />
      </Head>
      <Body>
        {isLogged ? (
          <>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                navigate('/login');
              }}
            >
              Login
            </Button>
            <Button
              onClick={() => {
                navigate('/register');
              }}
            >
              Register
            </Button>
          </>
        )}
      </Body>
    </Container>
  );
};

export default Home;
