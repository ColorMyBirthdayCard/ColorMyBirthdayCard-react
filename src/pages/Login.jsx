import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useUserDispatch } from '@contexts/UserContext';
import AuthApi from '@api/AuthApi';
import AuthHeader from '@common/AuthHeader';
import Button from '@common/Button';
import AuthTextField from '@common/AuthTextField';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const handleLogin = async () => {
    const userInfo = JSON.stringify({ userId: id, password });
    try {
      const { userId, sessionId } = await AuthApi.signIn(userInfo);
      dispatch({
        type: 'LOGIN',
        memberId: userId
      });
      window.sessionStorage.setItem('sessionId', sessionId);
      window.sessionStorage.setItem('memberId', userId);
      navigate('/');
    } catch (e) {
      console.error(e.response);
    }
  };
  return (
    <>
      <AuthHeader to='/login'
                  pageTitle='SignIn'
                  pageSubtitle='Please login to make your letter box'/>
      <Body>
        <AuthTextField
          placeholder='아이디를 입력해주세요.'
          type='text'
          name='id'
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <AuthTextField
          placeholder='비밀번호를 입력해주세요.'
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin} title='Login'/>
      </Body>
    </>
  );
};

export default Login;
