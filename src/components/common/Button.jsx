import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import '@fonts/font.css';

const Button = ({ title, ...rest }) => (
  rest.to ? <StyledLink {...rest} > {title} </StyledLink> : <StyledButton {...rest} >{title} </StyledButton>
);

export default Button;

const buttonStyle = css`
  width: ${props => props.width || 'auto'};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3rem;
  text-decoration: none;
  outline: none;

  color: #5669AF;
  background-color: #FCDC86;

  font-family: PatrickHand-Regular, Bazzi, Serif;
  font-size: 3rem;
  line-height: 1.15;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #8290c4;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle};
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;