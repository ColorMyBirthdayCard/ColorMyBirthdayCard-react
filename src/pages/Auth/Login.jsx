import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useUserDispatch } from '@contexts/UserContext';
import AuthApi from '@api/AuthApi';
import AuthHeader from '@common/AuthHeader';
import Button from '@common/Button';
import MyTextField from '@common/MyTextField';
import MobileBackgroundImage from '@images/mobilebackground.png';
import BackgroundImage from '@images/background2.png';
import SmallButton from '@common/SmallButton';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const handleLogin = async () => {
    const userInfo = JSON.stringify({ userId: id, password });
    try {
      const {
        data: { userId, sessionId }
      } = await AuthApi.signIn(userInfo);
      dispatch({
        type: 'LOGIN',
        memberId: userId
      });
      window.sessionStorage.setItem('sessionId', sessionId);
      window.sessionStorage.setItem('memberId', userId);
      navigate(`/home?id=${userId}`);
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('가입되지 않은 회원입니다.');
    }
  };

  useEffect(() => {
    if (window.sessionStorage.getItem('sessionId') !== null) {
      const queryId = window.sessionStorage.getItem('memberId');
      navigate(`/home?id=${queryId}`);
    }
  });

  return (
    <Container>
      <AuthHeader to='/login' pageTitle='SignIn' pageSubtitle='Please login to make your letter box' />
      <Body>
        <MyTextField
          placeholder='아이디를 입력해주세요.'
          type='text'
          name='id'
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <MyTextField
          placeholder='비밀번호를 입력해주세요.'
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleLogin} title='Login' />
      </Body>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '3rem'
        }}
      >
        <SmallButton onClick={() => navigate(-1)}>go back</SmallButton>
      </div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  @media (max-width: 768px) {
    background-image: url(${MobileBackgroundImage});
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginButton = styled(Button)`
  width: 22rem;
  margin-top: 0.5rem;
`;
