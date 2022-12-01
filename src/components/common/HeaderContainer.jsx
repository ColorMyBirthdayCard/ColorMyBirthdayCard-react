import React from 'react';
import Header from '@common/Header';
import { useUserState } from '@contexts/UserContext';
import styled from 'styled-components';


const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const HeaderContainer = () => {
  const { memberId, isLogged } = useUserState();
  return (
    <Container>
      <Header memberId={memberId} isLogged={isLogged} />
    </Container>
  );
};

export default HeaderContainer;