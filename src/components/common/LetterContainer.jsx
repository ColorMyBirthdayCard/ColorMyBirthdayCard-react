import React, { useState, useEffect } from 'react';
import LetterApi from '@api/LetterApi';
import { useUserState } from '@contexts/UserContext';

const LetterContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [letters, setLetters] = useState([]);
  const { memberId, isLogged } = useUserState();
  
  const fetchLetters = async() => {
    try {
      // setError(false);
      // setLoading(true);
      const response = LetterApi.fetchAll(memberId);
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
    <>
      {letters}
    </>
  );
};

export default LetterContainer;