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

const Register = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const userInfo = JSON.stringify({ userId, password });
    try {
      const response = await AuthApi.signUp(userInfo);
      navigate('/');
    } catch (e) {
      console.error(e.response);
    }
  };

  return (
    <Container>
      <Head>
        <Title title="SignUp" />
        <Subtitle title="내 편지를 꾸며줘에 회원가입합니다." />
      </Head>
      <Body>
        <Input
          type="text"
          name="userId"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          placeholder="아이디를 입력해주세요."
        />
        <Input
          type="text"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요."
        />
        <Input
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="비밀번호를 재입력해주세요."
        />

        <Button onClick={handleRegister} title="register" width="21.5rem" />
      </Body>
    </Container>
  );
};

export default Register;
