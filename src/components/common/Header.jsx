import React from 'react';
import styled from 'styled-components';

import '@fonts/font.css';
import Responsive from '@common/ResponsiveBlock';
import SmallButton from '@common/SmallButton';

const Header = ({ isLogged, userName, day, onLogout }) => (
  <>
    <Wrapper>
      <div className='logo'>
        {userName ? `Color ${userName}'s Birthday Letters` : 'Color My Birthday Letters' }
      </div>
      {isLogged ? (
        <div className='right'>
          {/* eslint-disable-next-line no-nested-ternary */}
          { day ? <div className='day'>Birthday D{day < 0 ? "+" : "-"}{day === 0 ? "Day" : (day < 0 ? -day : day)} </div> : null }
          <SmallButton onClick={onLogout}>Logout</SmallButton>
        </div>
      ) : (
        <div className='right'>
          {/* eslint-disable-next-line no-nested-ternary */}
          { day ? <div className='day'>Birthday D{day < 0 ? "+" : "-"}{day === 0 ? "Day" : (day < 0 ? -day : day)} </div> : null }
          <SmallButton to='/login' style={{ marginRight: 5 }}>Login</SmallButton>
        </div>
      )}
    </Wrapper>
    <Spacer />
  </>
);

export default Header;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* flex option */

  .logo {
    font-family: PatrickHand-Regular, Bazzi, serif;
    font-size: 1.625rem;
    letter-spacing: 2px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    text-align: left;
    color: #5669AF;
    text-decoration: none;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  .day {
    font-family: PatrickHand-Regular, Bazzi, serif;
    font-size: 1.225rem;
    letter-spacing: 2px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    text-align: left;
    color: #5669AF;
    text-decoration: none;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Spacer = styled.div`
  height: 1rem;
`;
