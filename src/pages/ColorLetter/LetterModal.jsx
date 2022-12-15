import React from 'react';
import styled from 'styled-components';

import back1 from '@images/back1.png';
import back2 from '@images/back2.png';
import back3 from '@images/back3.png';
import back4 from '@images/back4.png';
import back5 from '@images/back5.png';
import back6 from '@images/back6.png';

const LetterModal = ({ paper, content }) => {
  const letterList = [back1, back2, back3, back4, back5, back6];
  return (
    <>
      <TextArea readonly style={{ backgroundImage: `url(${letterList[paper]})` }} value={content} />
    </>
  );
};

export default LetterModal;

const TextArea = styled.textarea`
  width: 280px;
  height: 400px;
  padding: 30px 35px;
  scroll-padding: 30px 0 30px 0;
  box-sizing: border-box;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  font-family: NotoSansKR_Medium, Montserrat_Medium, serif;
  font-size: 0.938rem;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.75px;
  text-align: left;
  color: #000;
  overflow: auto;
  border: none;
  outline: none;
  resize: none;
  @media (max-width: 768px) {
    width: 200px;
    height: 280px;
  }
`;
