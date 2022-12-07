import React from 'react';
import styled from "styled-components";
import cake from 'static/8017118.jpg';

const BackgroundImage = styled.img`
  width: 100%;
`;

const Letter = ({letters}) => (
    <>
        <BackgroundImage alt="케이크" src={cake} />
    </>
);
export default Letter;