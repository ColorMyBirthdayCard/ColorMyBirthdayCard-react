import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import '@fonts/font.css';
import palette from '@styles/Palette';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-family: Montserrat_Medium;
  font-size: 1.2rem;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.gray[8]};
  text-decoration: none;
  @media (max-width: 620px) {
    font-size: 0.95rem;
  }
  @media (max-width: 400px) {
    font-size: 0.75rem;
  }
  &:hover {
    background: ${palette.gray[6]};
  }

  ${props => props.fullWidth && css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
  `
  }
  ${props => props.cyan && css`
    background: ${palette.cyan[5]};

    &:hover {
      background: ${palette.cyan[4]};
    }
  `
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const SmallButton = props => (
  props.to ? <StyledLink {...props} cyan={props.cyan ? 1 : 0} /> : <StyledButton {...props} />
);

export default SmallButton;