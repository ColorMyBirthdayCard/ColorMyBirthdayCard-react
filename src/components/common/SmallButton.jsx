import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import '@fonts/font.css';


const SmallButton = props => (
  props.to ? <StyledLink {...props} /> : <StyledButton {...props} />
);

export default SmallButton;

const buttonStyle = css`
  border: none;
  font-family: PatrickHand-Regular, serif;
  font-size: 1.5rem;
  padding: 0.25rem 1rem;
  color: #5669AF;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  background: none;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  &:hover {
    color: #8290c4;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;