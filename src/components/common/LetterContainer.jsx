import React, { useState, useEffect } from 'react';
import LetterApi from '@api/LetterApi';
import Letter from '@pages/Letter';
import dummy from '../../static/dummydata.json';

const LetterContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [letters, setLetters] = useState([]);
  const owner = new URLSearchParams(window.location.search).get('id');

  const fetchLetters = async () => {
    try {
      // setError(false);
      // setLoading(true);
      // const { data } = await LetterApi.fetchAll(owner);
      const { data }  = dummy;
      const temp = [];
      for(let i = 0; i < data.length; i += 6) {
        temp.push(data.slice(i, i + 6));
      }
      setLetters(temp);
      console.log(temp);
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
      <Letter letters={letters} />
    </>
  );
};

export default LetterContainer;