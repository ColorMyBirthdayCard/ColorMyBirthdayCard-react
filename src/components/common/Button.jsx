import React from 'react';
import styled from 'styled-components';

import '@fonts/font.css';

const Btn = styled.button`
  width: 22rem;
  height: 5.188rem;
  margin-bottom: 1.5rem;
  
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #d9fe96;
  
  font-family: Montserrat_Medium, NotoSansKR_Medium;
  font-size: 3rem;
  line-height: 1.15;
  text-align: center;
  letter-spacing: -2.4px;
  color: #000;
  cursor: pointer;
`;

const Button = ({ title, ...rest}) => (
  <Btn {...rest}>
    {title}
  </Btn>
);

export default Button;
