import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useUserDispatch } from '@contexts/UserContext';
import Responsive from '@common/ResponsiveBlock';
import SmallButton from '@common/SmallButton';
import AuthApi from '@api/AuthApi';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* flex option */

  .logo {
    font-family: Montserrat_SemiBold, serif;
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 2px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    text-align: left;
    color: #000;
    text-decoration: none;
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = ({ isLogged, memberId }) => {
  const dispatch = useUserDispatch();
  // handler functions
  const handleLogout = async () => {
    try {
      dispatch({
        type: 'LOGOUT'
      });
    } catch (e) {
      console.log(e);
    }
  };
  const hi = async () => {
    try {
      const response = await AuthApi.checkId();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            {' '}
            내 생일 편지를 꾸며줘{' '}
          </Link>
          {isLogged ? (
            <div className="right">
              <UserInfo>{memberId}</UserInfo>
              <SmallButton onClick={handleLogout}>로그아웃</SmallButton>
            </div>
          ) : (
            <div className="right">
              <SmallButton to="/login">로그인</SmallButton>
              <SmallButton to="/register">회원가입</SmallButton>
              <SmallButton onClick={hi}>ㅎㅇ</SmallButton>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
