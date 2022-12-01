import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderContainer from '@common/HeaderContainer';
import AuthApi from '@api/AuthApi';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  if (loading) {
    return <h1>로딩중</h1>;
  }

  if (error) {
    return <h1>에러</h1>;
  }

  return (
    <div>
      <HeaderContainer />
    </div>
  );
};

export default Home;
