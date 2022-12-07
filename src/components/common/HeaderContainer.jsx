import React, { useEffect } from 'react';

import Header from '@common/Header';
import { useUserDispatch, useUserState } from '@contexts/UserContext';

const HeaderContainer = () => {
  const { memberId, isLogged } = useUserState();
  const dispatch = useUserDispatch();

  const loadUser = () => {
    try {
      const sessionId = window.sessionStorage.getItem('sessionId');
      const user = window.sessionStorage.getItem('memberId');
      if (!sessionId || !user) return;
      dispatch({
        type: 'LOGIN',
        memberId: user
      });
    } catch (e) {
      dispatch({
        type: 'LOGOUT'
      });
      window.sessionStorage.clear()
    }
  }
  // handler functions
  const handleLogout = async () => {
    try {
      dispatch({
        type: 'LOGOUT'
      });
      window.sessionStorage.clear() // localStorage 에서 user 를 제거

    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      window.sessionStorage.clear()
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