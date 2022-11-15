import React from 'react';
import styled from 'styled-components';

import '@fonts/font.css';

const Text = styled.div`
  font-family: 'Montserrat_SemiBold';
  font-size: 0.938rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.75px;
  text-align: left;
  color: #000;
`;

const SubTitle = ({ title }) => <Text>{title}</Text>;

export default SubTitle;
