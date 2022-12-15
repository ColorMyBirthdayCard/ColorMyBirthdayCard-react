import React from 'react';
import styled, { css } from 'styled-components';

import '@fonts/font.css';

const MyTextField = ({ placeholder, ...rest }) => <Input placeholder={placeholder} {...rest} />;

export default MyTextField;

const Input = styled.input`
  width: 21rem;
  height: 3rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 90px;
  border: solid 4px #fcdc86;
  background-color: #fff;

  font-family: Montserrat_SemiBold, NotoSansKR_Medium, serif;
  font-size: 0.938rem;
  text-align: center;
  line-height: 3.67;
  letter-spacing: 1.25px;
  color: #392f31;

  @media (max-width: 768px) {
    height: 3rem;
  }
`;
