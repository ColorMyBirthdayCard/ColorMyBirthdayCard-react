import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import '@fonts/font.css';

import HeaderContainer from '@common/HeaderContainer';
import Button from '@common/Button';
import BackgroundImage from '@images/background2.png';
import back1 from '@images/back1.png';
import back2 from '@images/back2.png';
import back3 from '@images/back3.png';
import back4 from '@images/back4.png';
import back5 from '@images/back5.png';
import back6 from '@images/back6.png';
import MyTextField from '@common/MyTextField';

const Container = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
`;
const Title = styled.div`
  font-family: PatrickHand-Regular, NotoSansKR_Medium, serif;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
const LetterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TextArea = styled.textarea`
  width: 300px;
  height: 400px;
  padding: 30px 35px;
  scroll-padding: 30px 0 30px 0;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  font-family: NotoSansKR_Medium, Montserrat_Medium, serif;
  font-size: 0.938rem;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.75px;
  text-align: left;
  color: #000;
  overflow: auto;
  border: none;
  outline: none;
  resize: none;
`;

const ButtonContainer = styled.div`
  width: 100%;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Sub3 = () => {
  const [name, setName] = useState('');
  const [letter, setLetter] = useState('');
  const navigate = useNavigate();
  const letterList = [back1, back2, back3, back4, back5, back6];

  const icon = window.localStorage.getItem('icon');
  const paper = window.localStorage.getItem('paper');

  return (
    <Container>
      <HeaderContainer />
      <Title>Write your name and message!</Title>
      <LetterContainer>
        <MyTextField
          placeholder='보내는 사람의 이름을 입력해주세요.'
          type='text'
          name='id'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextArea placeholder='여기에 입력하세요'
                  style={{ backgroundImage: `url(${letterList[paper]})` }}
                  value={letter}
                  onChange={e => setLetter((e.target.value))} />
      </LetterContainer>
      <ButtonContainer>
        <Button title='Send' />
      </ButtonContainer>
    </Container>
  );
};
export default Sub3;