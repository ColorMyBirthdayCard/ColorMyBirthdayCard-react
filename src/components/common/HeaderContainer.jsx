import React, { useEffect } from 'react';

import Header from '@common/Header';
import { useUserDispatch, useUserState } from '@contexts/UserContext';

const HeaderContainer = () => {
  const { memberId, isLogged } = useUserState();
  const dispatch = useUserDispatch();

  const loadUser = () => {
    try {
      const sessionId = window.localStorage.getItem('sessionId');
      const user = window.localStorage.getItem('memberId');
      if (!sessionId || !user) return;
      dispatch({
        type: 'LOGIN',
        memberId: user
      });
    } catch (e) {
      dispatch({
        type: 'LOGOUT'
      });
    }
  }
  // handler functions
  const handleLogout = async () => {
    try {
      dispatch({
        type: 'LOGOUT'
      });
      window.localStorage.removeItem('user') // localStorage 에서 user 를 제거
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  useEffect( () => {
    loadUser();
  }, [])

  return (
    <>
      <Header memberId={memberId} isLogged={isLogged} onLogout={handleLogout}/>
    </>
  );
};

export default HeaderContainer;