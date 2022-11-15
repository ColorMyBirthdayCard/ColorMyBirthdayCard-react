import React from 'react';
import styled from 'styled-components';

import '@fonts/font.css';

const Btn = styled.button`
  width: ${props => props.width || '21rem'};
  height: 5.188rem;
  border-radius: 90px;
  border: solid 4px #000;
  background-color: #d9fe96;
  cursor: pointer;

  font-family: Montserrat_Medium;
  font-size: 3rem;
  line-height: 1.15;
  letter-spacing: -2.4px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
`;

const Button = ({ title, onClick, width }) => (
  <Btn onClick={onClick} width={width}>
    {title}
  </Btn>
);

export default Button;
