import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Title from '@common/Title';
import Subtitle from '@common/SubTitle';

const Container = styled.div`
  padding-top: 2.5rem;
`;

const Head = styled.div`
  width: 21rem;
`;

const Body = styled.div`
  margin-top: 5rem;
`;

const Home = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] =
    useState('');

  return (
    <Container>
      <Head>
        <Title title="SignIn" />
        <Subtitle title="편지함을 만들기 위해 로그인합니다." />
      </Head>
      <Body>ㅎㅇ</Body>
    </Container>
  );
};

export default Home;
