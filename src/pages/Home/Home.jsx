import React from 'react';

import HeaderContainer from '@common/HeaderContainer';
import LetterContainer from '@common/LetterContainer';
import { useUserState } from '@contexts/UserContext';
import Button from '@common/Button';

const Home = () => {
  const { memberId, isLogged} = useUserState();

  return (
    <>
      <HeaderContainer />
      <LetterContainer />
      {isLogged ? <Button title='공유하기'/> : <Button title='편지쓰기'/>}
    </>
  );
};

export default Home;
