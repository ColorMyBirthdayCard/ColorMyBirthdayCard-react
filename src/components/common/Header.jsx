import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '@fonts/font.css';
import Responsive from '@common/ResponsiveBlock';
import SmallButton from '@common/SmallButton';

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* flex option */

  .logo {
    font-family: PatrickHand-Regular, serif;
    font-size: 1.625rem;
    letter-spacing: 2px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    text-align: left;
    color: #000;
    text-decoration: none;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
  @media (max-width: 768px) {
    height: 1rem;
  }
`;

const UserInfo = styled.div`
  font-family: PatrickHand-Regular, NotoSansKR_Medium, serif;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const Header = ({ isLogged, memberId, onLogout }) => (
  <>
    <div>
      <Wrapper>
        <Link to='/home' className='logo'>
          Color My Birthday Letters
        </Link>
        {isLogged ? (
          <div className='right'>
            <UserInfo>Welcome! {memberId}</UserInfo>
            <SmallButton onClick={onLogout}>Logout</SmallButton>
          </div>
        ) : (
          <div className='right'>
            <SmallButton to='/login' style={{ marginRight: 5 }}>Login</SmallButton>
          </div>
        )}
      </Wrapper>
    </div>
    <Spacer />
  </>
);

export default Header;
