import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import '@fonts/font.css';

import HeaderContainer from '@common/HeaderContainer';
import Button from '@common/Button';
import back1 from '@images/back1.png';
import back2 from '@images/back2.png';
import back3 from '@images/back3.png';
import back4 from '@images/back4.png';
import back5 from '@images/back5.png';
import back6 from '@images/back6.png';
import MyTextField from '@common/MyTextField';
import BackgroundImage from '@images/background2.png';
import MobileBackgroundImage from '@images/mobilebackground.png';
import LetterApi from '@api/LetterApi';

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
const Title = styled.div`
  font-family: PatrickHand-Regular, NotoSansKR_Medium, serif;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
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
  position: relative;
  width: 100%;
  top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MYTextField = styled(MyTextField)`
  @media (max-width: 768px) {
    height: 3rem;
  }
`;
const Sub3 = () => {
  const [name, setName] = useState('');
  const [letter, setLetter] = useState('');
  const navigate = useNavigate();
  const letterList = [back1, back2, back3, back4, back5, back6];

  const icon = window.localStorage.getItem('icon');
  const paper = window.localStorage.getItem('paper');
  const owner = new URLSearchParams(window.location.search).get('id');

  const sendLetters = async () => {
    if(name === '') {
      alert('이름을 적어주세요.')
    } else if(letter === ' ') {
      alert('내용을 적어주세요.')
    } else {
      try {
        const data = JSON.stringify({
          'writerId': name,
          'content': letter,
          'userId': owner,
          'paper' : paper,
          'icon' : icon
        })
        const response = await LetterApi.send(owner, data);
        if(response.status >= 200 && response.status <= 299) {
          alert('편지를 보냈습니다!')
          navigate(`/home/?id=${owner}`)
        }
        console.log(response)
      } catch (e) {
        alert('다시 시도해주세요.')
      }
    }
  }
  return (
    <Container>
      <HeaderContainer />
      <Title>Write your name and message!</Title>
      <LetterContainer>
        <MYTextField
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
        <Button title='Send' onClick={sendLetters}/>
      </ButtonContainer>
    </Container>
  );
};
export default Sub3;