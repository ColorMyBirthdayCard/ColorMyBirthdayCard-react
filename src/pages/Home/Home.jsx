import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import HeaderContainer from '@common/HeaderContainer';
import LetterContainer from '@pages/ColorLetter/LetterContainer';
import { useUserState } from '@contexts/UserContext';
import Button from '@common/Button';
import CakeImage from '@images/cakeBackground.png';
import BackgroundImage from '@images/background2.png';
import MobileBackgroundImage from '@images/mobilebackground.png';

const Home = () => {
  const { isLogged } = useUserState();
  const navigate = useNavigate();
  const owner = new URLSearchParams(window.location.search).get('id');

  const clip = () => {
    let url = '';
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <>
      <div style={{ zIndex: 1 }}>
        <Container />
        <CakeContainer />
      </div>
      <Wrapper>
        <HeaderContainer />
        <div style={{ height: '30vh' }} />
        <Content>
          <LetterContainer />
        </Content>
        <ButtonContainer>
          {/* eslint-disable-next-line no-nested-ternary */}
          {isLogged ? <Button title='Share Letter' onClick={() => { clip(); alert('복사되었습니다.');}} /> :
            ( owner ? <Button to={`/sub1?id=${owner}`} title='Write Letter' /> :
              <Button to='/login' title='Make letter box' />)
            }
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default Home;
const ImageStyle = css`;
  position: fixed;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  ${ImageStyle};
  background-image: url(${BackgroundImage});
  background-size: cover;
  @media (max-width: 768px) {
    background-image: url(${MobileBackgroundImage});
  }
`;
const CakeContainer = styled.div`
  ${ImageStyle};
  background-image: url(${CakeImage});
  background-size: contain;
`;
const Wrapper = styled.div`
  z-index: 100;
  height: 100vh;
  width: 100vw;
`;
const Content = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
const ButtonContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  bottom: 1rem;
`;