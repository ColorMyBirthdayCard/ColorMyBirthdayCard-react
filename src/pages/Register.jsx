import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Title from '@common/Title';
import Subtitle from '@common/SubTitle';
import Button from '@common/Button';
import AuthApi from '@api/AuthApi';

const Container = styled.div`
  padding-top: 2.5rem;
`;

const Head = styled.div`
  width: 21rem;
`;

const Body = styled.div`
  margin-top: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  // State
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isValidId, setIsValidId] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);

  const navigate = useNavigate();

  // Reg check function
  const idCheck = (id) => {
    // 영문자로 시작하는 영어, 숫자로 이루어진 6~20자 아이디.
    const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
    return regExp.test(id);
  };

  const passwordCheck = (pw) => {
    // 영어, 숫자, 특수문자를 최소 한 개씩 포함하는 8~16자 비밀번호
    const regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (regExp.test(pw)) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  }

  const passwordDoubleCheck = (pw, cpw) => {
    if (pw === cpw) {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false);
    }
  }

  const alertMessage = (message) => { alert(message); }

  // Action Handler
  const handleRegister = async () => {
    const userInfo = JSON.stringify({ userId, password });
    try {
      const response = await AuthApi.signUp(userInfo);
      navigate('/');
    } catch (e) {
      console.error(e.response);
    }
  };

  const handleDuplicateIdCheck = async () => {
    if (userId === '') {
      alertMessage('아이디를 입력하셈.');
      return;
    }
    if (!idCheck(userId)) {
      alertMessage('아이디 양식 지켜주셈.');
      return;
    }
    try {
      const response = await AuthApi.checkId(userId);
      setIsValidPassword(true);
      alertMessage('사용 가능한 아이디입니다.');
    } catch (e) {
      console.error(e);
      alertMessage('사용 불가능한 아이디입니다.');
    }
  }

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
          onChange={e => {setUserId(e.target.value); idCheck(e.target.value)}}
          placeholder="아이디를 입력해주세요."
        />
        <Button onClick={handleDuplicateIdCheck} title="중복확인" width="21.5rem" />
        <Input
          type="text"
          name="password"
          value={password}
          onChange={e => {setPassword(e.target.value); passwordCheck(e.target.value)}}
          placeholder="비밀번호를 입력해주세요."
        />
        {isValidPassword ? <div>가능한 비밀번호 </div> : <div> 불가능한 비밀번호 </div>}
        <Input
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={e => { setConfirmPassword(e.target.value); passwordDoubleCheck(password, e.target.value)}}
          placeholder="비밀번호를 재입력해주세요."
        />
        {isSamePassword ? <div>비밀번호가 같다. </div> : <div> 비밀번호가 서로 다르다. </div>}
        <Button onClick={handleRegister} title="register" width="21.5rem" />
      </Body>
    </Container>
  );
};

export default Register;
