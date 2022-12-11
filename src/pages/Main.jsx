import React from 'react';
import styled from 'styled-components';

import BackgroundImage from '@images/background1.png';
import MobileBackgroundImage from '@images/mobilebackground1.png';
import SmallButton from '@common/SmallButton';
import Button from '@common/Button';
import { useUserDispatch, useUserState } from '@contexts/UserContext';

const Container = styled.div`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  :first-child {
    display: flex;
    align-items: start;
    justify-content: center;
  }

  :last-child {
    display: flex;
    align-items: end;
    justify-content: center;
  }

  @media (max-width: 768px) {
    background-image: url(${MobileBackgroundImage});
  }
`;

const GNB = styled.div`
  position: fixed;
  width: 30%;
  top: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /*  desktop  */
  @media (max-width: 1024px) {
    width: 768px;
  }
  /* tablet,mobile */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const GNBSeperator = styled.div`
  background-color: #5669AF;
  width: 0.15rem;
  height: 2rem;
`;

const StartButton = styled(Button)`
  position: fixed;
  bottom: 5rem;
  width: 13rem;
  height: 4rem;
  font-size: 3rem;
`;
const Main = () => {
  const { memberId, isLogged } = useUserState();
  const dispatch = useUserDispatch();

  const handleLogout = async () => {
    try {
      dispatch({
        type: 'LOGOUT'
      });
      window.sessionStorage.clear(); // localStorage 에서 user 를 제거

    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      window.sessionStorage.clear();
    }
  };

  return (
    <Container>
      <GNB>
        <SmallButton to='/'>home</SmallButton>
        <GNBSeperator />
        {isLogged ? <SmallButton onClick={handleLogout}>logout</SmallButton> :
          <>
            <SmallButton to='/login'>login</SmallButton>
            <GNBSeperator />
            <SmallButton to='/register'>sign up</SmallButton>
          </>
        }
      </GNB>
      <StartButton to='/home' title='Start!' />
    </Container>
  );
};
export default Main;
