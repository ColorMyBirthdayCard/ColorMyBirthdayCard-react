import React from 'react';
import styled from 'styled-components';

const Responsive = ({ children, ...rest }) => <ResponsiveBlock {...rest}> {children} </ResponsiveBlock>;

export default Responsive;

const ResponsiveBlock = styled.div`
  padding: 0 1rem;
  width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;

  /*  desktop  */
  @media (max-width: 1024px) {
    width: 768px;
  }
  /* tablet,mobile */
  @media (max-width: 768px) {
    width: 100%;
  }
`;
