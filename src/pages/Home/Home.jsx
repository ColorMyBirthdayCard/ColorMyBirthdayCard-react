import React from 'react';
import styled, { css } from 'styled-components';

import HeaderContainer from '@common/HeaderContainer';
import LetterContainer from '@common/LetterContainer';
import { useUserState } from '@contexts/UserContext';
import Button from '@common/Button';
import LetterApi from '@api/LetterApi';
import CakeImage from '@images/cakeBackground.png';
import BackgroundImage from '@images/background2.png';
import MobileBackgroundImage from '@images/mobilebackground.png';

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
const Home = () => {
  const { memberId, isLogged } = useUserState();
  const owner = new URLSearchParams(window.location.search).get('id');

  const send = async () => {
    try {
      // setError(false);
      // setLoading(true);
      const response = await LetterApi.fetchAll(owner);
      console.log(response);
    } catch (e) {
      // setError(true);
    }
    // setLoading(false);
  };
  return (
    <>
      <div style={{zIndex: 1}}>
        <Container />
        <CakeContainer />
      </div>
      <Wrapper>
        <HeaderContainer />
        <div style={{height: '30vh',}} />
        <Content>
          <LetterContainer />
        </Content>
        <ButtonContainer>
          {isLogged ? <Button title='Share Letter' /> : <Button to='/sub1' title='Write Letter' />}
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default Home;