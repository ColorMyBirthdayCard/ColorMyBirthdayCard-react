import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Title from '@common/Title';
import Subtitle from '@common/SubTitle';
import Button from '@common/Button';

import AuthApi from '@api/AuthApi';

const Container = styled.div`
  padding-top: 2.5rem;
  background-color: aliceblue;
`;

const Head = styled.div`
  width: 21rem;
`;

const Body = styled.div`
  margin-top: 5rem;
`;

const Input = styled.input`
  width: 21rem;
  height: 5.188rem;
  margin-bottom: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;

  border-radius: 90px;
  border: solid 4px #000;
  background-color: #fff;

  overflow: auto;
  outline: none;
  resize: none;

  font-family: 'Montserrat_Medium';
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  line-height: 3.67;
  letter-spacing: -0.75px;
  color: #000;
`;

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const login = async event => {
    event.stopPropagation();
    try {
      // const info = {
      //   Username: id,
      //   Password: password
      // };
      const data = await AuthApi.signIn();
      const { sessionId } = data;
      window.sessionStorage.setItem('id', sessionId);
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Container>
      <Head>
        <Title title="SignIn" />
        <Subtitle title="편지함을 만들기 위해 로그인합니다." />
      </Head>
      <Body>
        <Input
          type="text"
          name="id"
          value={id}
          onChange={e => setId(e.target.value)}
          placeholder="아이디를 입력해주세요."
        />
        <Input
          type="text"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요."
        />
        <Button onClick={login} title="Login" width="21.5rem" />
      </Body>
    </Container>
  );
};

export default Login;
