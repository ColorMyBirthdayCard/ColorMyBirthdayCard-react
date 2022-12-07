import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@common/Button';
import AuthApi from '@api/AuthApi';
import AuthHeader from '@common/AuthHeader';
import AuthTextField from '@common/AuthTextField';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Register = () => {
  // State
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);

  const navigate = useNavigate();

  const alertMessage = message => {
    alert(message);
  };
  // Reg check function
  const idCheck = id => {
    // 영문자로 시작하는 영어, 숫자로 이루어진 6~13자 아이디.
    const regExp = /^[a-z]+[a-z0-9]{5,12}$/g;
    return regExp.test(id);
  };
  const passwordCheck = pw => {
    // 영어, 숫자, 특수문자를 최소 한 개씩 포함하는 8~16자 비밀번호
    const regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (regExp.test(pw)) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };
  const passwordDoubleCheck = (pw, cpw) => {
    if (pw === cpw) {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false);
    }
  };

  // Action Handler
  const handleRegister = async () => {
    if(!isValidPassword) {
      alertMessage('비밀번호 양식을 지켜주세요.');
    } else if(!isSamePassword) {
      alertMessage('비밀번호가 일치하지 않습니다.')
    } else {
      const userInfo = JSON.stringify({ userId, password });
      try {
        const response = await AuthApi.signUp(userInfo);
        console.log(response);
        navigate('/');
      } catch (e) {
        console.error(e.response);
      }
    }
  };
  const handleDuplicateIdCheck = async () => {
    if (userId === '') {
      alertMessage('아이디를 입력하세요.');
    } else if (!idCheck(userId)) {
      alertMessage('아이디 양식을 지켜주세요.');
    } else {
      try {
        const info = JSON.stringify({ userId });
        const { message } = await AuthApi.checkId(info);
        if (message === true) {
          setIsValidPassword(true);
          alertMessage('사용 가능한 아이디입니다.');
        } else {
          setIsValidPassword(false);
          alertMessage('사용 불 가능한 아이디입니다.');
        }
      } catch (e) {
        console.error(e);
        alertMessage('사용 불 가능한 아이디입니다.');
      }
    }
  };

  return (
    <>
      <AuthHeader to='/register'
                  pageTitle='SignUp'
                  pageSubtitle='Signup and make your letter box!'/>
      <Body>
        <AuthTextField
          type='text'
          name='userId'
          value={userId}
          onChange={e => {
            setUserId(e.target.value);
            idCheck(e.target.value);
          }}
          placeholder='아이디를 입력해주세요.'
        />
        <Button onClick={handleDuplicateIdCheck} title='check id' width='21.5rem' />
        <AuthTextField
          type='password'
          name='password'
          value={password}
          onChange={e => {
            setPassword(e.target.value);
            passwordCheck(e.target.value);
          }}
          placeholder='비밀번호를 입력해주세요.'
        />
        <AuthTextField
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={e => {
            setConfirmPassword(e.target.value);
            passwordDoubleCheck(password, e.target.value);
          }}
          placeholder='비밀번호를 재입력해주세요.'
        />
        <Button onClick={handleRegister} title='register' />
      </Body>
    </>
  );
};

export default Register;
