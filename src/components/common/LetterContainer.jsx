import React, { useState, useEffect } from 'react';
import LetterApi from '@api/LetterApi';
import Letter from '@pages/Letter';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LetterContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [letters, setLetters] = useState([]);
  const owner = new URLSearchParams(window.location.search).get('id');

  const fetchLetters = async () => {
    try {
      // setError(false);
      // setLoading(true);
      const result = await LetterApi.fetchAll(owner);
      console.log(result);
    } catch (e) {
      // setError(true);
    }
    // setLoading(false);
  };

  useEffect(() => {
    fetchLetters();
  }, []);

  if (loading) {
    return <h1>로딩중</h1>;
  }

  if (error) {
    return <h1>에러</h1>;
  }

  return (
    <Container>
      <Letter letters={owner} />

    </Container>
  );
};

export default LetterContainer;