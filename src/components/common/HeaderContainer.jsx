import React from 'react';

import Header from '@common/Header';
import { useUserDispatch, useUserState } from '@contexts/UserContext';

const HeaderContainer = () => {
  const { memberId, isLogged, userName, userBirthday } = useUserState();
  const dispatch = useUserDispatch();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const getDay = () => {
    if (!userBirthday) return null;
    const birthday = userBirthday.split('-');
    const thisMonth = new Date().getMonth();
    const thisDay = new Date().getDay();
    let targetYear = new Date().getFullYear();
    if (thisMonth > birthday[1]) {
      // 생일 달이 같거나 지난 경우
      targetYear += 1;
    } else if (thisMonth === parseInt(birthday[1], 10) && thisDay > parseInt(birthday[2], 10)) {
      // 현재 날짜가 더 크면 생일이 지난겨
      targetYear += 1;
    }

    const targetMonth = months[parseInt(birthday[1], 10) - 1];
    const targetDay = parseInt(birthday[2], 10);
    const day = new Date(`${targetMonth} ${targetDay}, ${targetYear} 23:59:59`).getTime();
    const today = new Date().getTime();
    const diff = day - today;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  // handler functions
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
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Header memberId={memberId} userName={userName} day={getDay()} isLogged={isLogged} onLogout={handleLogout} />
    </div>
  );
};

export default HeaderContainer;
