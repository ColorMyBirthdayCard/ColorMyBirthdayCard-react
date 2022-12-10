import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import '@fonts/font.css';

import icon10 from '@images/icon/icon10@2x.png';
import icon2 from '@images/icon/icon2@2x.png';
import icon3 from '@images/icon/icon3@2x.png';
import icon4 from '@images/icon/icon4@2x.png';
import icon5 from '@images/icon/icon5@2x.png';
import icon6 from '@images/icon/icon6@2x.png';
import icon7 from '@images/icon/icon7@2x.png';
import icon8 from '@images/icon/icon8@2x.png';
import icon9 from '@images/icon/icon9@2x.png';

import HeaderContainer from '@common/HeaderContainer';
import Button from '@common/Button';
import BackgroundImage from '@images/background2.png';
import MobileBackgroundImage from '@images/mobilebackground.png';

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
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;
  column-gap: 10px;
  align-items: center;
  justify-items: center;
  width: 700px;
  @media (max-width: 1024px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    width: 400px;
  }
`;
const Select = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 50%);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: PatrickHand-Regular, serif;
  color: white;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
const Icon = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Sub2 = () => {
  const [icon, setIcon] = useState(-1);
  const navigate = useNavigate();

  const icons = [icon10, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];
  const handleNextClick = () => {
    if (icon === -1) {
      alert('편지지의 우표를 선택해주세요');
      return;
    }
    window.localStorage.setItem('icon', `${icon}`);
    navigate('/sub3');
  };

  return (
    <Container>
      <HeaderContainer />
      <Title>Select letter stamp!</Title>
      <Content>
        <IconContainer>
          {icons.map((elem, index) => (
            <div>
              {icon === index ? <Select>select</Select> : <></>}
              <Icon src={elem} onClick={() => {
                setIcon(index);
              }} />
            </div>
          ))}
        </IconContainer>
      </Content>
      <ButtonContainer>
        <Button title='Next' onClick={handleNextClick} />
      </ButtonContainer>
    </Container>
  );
};
export default Sub2;