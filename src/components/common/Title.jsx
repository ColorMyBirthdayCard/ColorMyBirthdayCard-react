import React from 'react';
import styled from 'styled-components';

import '@fonts/font.css';

const Text = styled.div`
  font-family: Montserrat_SemiBold;
  font-size: 3.625rem;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -2.9px;
  text-align: left;
  color: #000;
`;

const Title = ({ title }) => <Text>{title}</Text>;

export default Title;
