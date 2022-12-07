import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '@fonts/font.css'
import Responsive from '@common/ResponsiveBlock';

const HeaderBlock = styled.div`
  background: white;
`;

const Wrapper = styled(Responsive)`
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* flex option */
  .title {
    font-family: Montserrat_SemiBold, NotoSans_SemiBold;
    font-size: 3.625rem;
    letter-spacing: 2px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    text-align: left;
    color: #000;
    text-decoration: none;
  }

  .subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const SubTitle = styled.div`
  font-family: NotoSans_SemiBold;
  font-size: 0.938rem;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.75px;
  text-align: left;
  color: #000;
`;

const AuthHeader = ({ to, pageTitle, pageSubtitle }) => (
  <>
    <HeaderBlock>
      <Wrapper>
        <Link to={to} className='title'>{pageTitle}</Link>
        <div className='subtitle'>
          <SubTitle>{pageSubtitle}</SubTitle>
        </div>
      </Wrapper>
    </HeaderBlock>
    <Spacer />
  </>
);

export default AuthHeader;