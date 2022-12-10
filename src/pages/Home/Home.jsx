import React from 'react';
import styled, { css } from 'styled-components';

import Header from '@common/HeaderContainer';
import Letter from '@common/LetterContainer';
import { useUserState } from '@contexts/UserContext';
import Button from '@common/Button';
import LetterApi from '@api/LetterApi';
import CakeImage from '@images/cakeBackground.png';
import BackgroundImage from '@images/background2.png';
import MobileBackgroundImage from '@images/mobilebackground.png';

const ImageStyle = css`;
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
  position: absolute;
  top: 0;
  ${ImageStyle};
  background-image: url(${CakeImage});
  background-size: contain;
`;
const HeaderContainer = styled(Header)`
`;
const LetterContainer = styled(Letter)`
`;
const ContentContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
    <Container>
      <CakeContainer>
        <HeaderContainer />
        <LetterContainer />
        <ContentContainer>
          {isLogged ? <Button title='Share Letter' /> : <Button to='/sub1' title='Write Letter' />}
        </ContentContainer>
      </CakeContainer>
    </Container>
  );
};

export default Home;

/**
 * <Container>
 *       <HeaderContainer />
 *       <LetterContainer />
 *       {isLogged ? <Button title='공유하기'/> : <Button title='편지쓰기' onClick={send}/>}
 *     </Container>
 */