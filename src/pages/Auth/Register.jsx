import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@common/Button';
import AuthApi from '@api/AuthApi';
import AuthHeader from '@common/AuthHeader';
import MyTextField from '@common/MyTextField';
import BackgroundImage from '@images/background2.png';
import MobileBackgroundImage from '@images/mobilebackground.png';
import SmallButton from '@common/SmallButton';

const Register = () => {
  // State
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidId, setIsValidId] = useState(false);

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
    return regExp.test(pw);
  };

  // Action Handler
  const handleRegister = async () => {
    if (!isValidId) {
      alertMessage('아이디 중복 체크를 해주세요.');
    } else if (!passwordCheck(password)) {
      alertMessage('비밀번호 양식을 지켜주세요.');
    } else if (password !== confirmPassword) {
      alertMessage('비밀번호가 일치하지 않습니다.');
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
        const {
          data: { message }
        } = await AuthApi.checkId(info);
        if (message === '가능한 아이디') {
          setIsValidId(true);
          alertMessage('사용 가능한 아이디입니다.');
        } else {
          setIsValidId(false);
          alertMessage('사용 할 수 없는 아이디입니다.');
        }
      } catch (e) {
        console.error(e);
        alertMessage('사용 할 수 없는 아이디입니다.');
      }
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
      <AuthHeader to='/register' pageTitle='SignUp' pageSubtitle='Signup and make your letter box!' />
      <Body>
        <MyTextField
          type='text'
          name='name'
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          placeholder='이름을 입력해주세요.'
        />
        <MyTextField
          type='date'
          required
          aria-required='true'
          value={birthday}
          className='dateTextField'
          onChange={e => {
            setBirthday(e.target.value);
          }}
          placeholder='생일을 입력해주세요.'
        />
        <MyTextField
          type='text'
          name='userId'
          value={userId}
          onChange={e => {
            setUserId(e.target.value);
          }}
          placeholder='아이디를 입력해주세요.'
        />
        <LoginButton onClick={handleDuplicateIdCheck} title='check id' width='21.5rem' />
        <MyTextField
          type='password'
          name='password'
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder='비밀번호를 입력해주세요.'
        />
        <MyTextField
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={e => {
            setConfirmPassword(e.target.value);
          }}
          placeholder='비밀번호를 재입력해주세요.'
        />
        <LoginButton onClick={handleRegister} title='register' />
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

export default Register;

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
  margin-bottom: 0.5rem;
`;
