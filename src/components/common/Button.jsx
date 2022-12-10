import React from 'react';
import styled, { css } from 'styled-components';

import '@fonts/font.css';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  width: ${props => props.width || 'auto'};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3rem;
  text-decoration: none;
  outline: none;

  color: #5669AF;
  background-color: #FCDC86;

  font-family: PatrickHand-Regular, NotoSansKR_Medium, Serif;
  font-size: 3rem;
  line-height: 1.15;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #8290c4;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle};
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = ({ title, ...rest }) => (
  rest.to ? <StyledLink {...rest} > {title} </StyledLink> : <StyledButton {...rest} >{title} </StyledButton>
);

export default Button;
