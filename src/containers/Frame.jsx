import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function Frame() {
  return (
    <Wrapper>
      <Title>Hello World, this is my first styled component!</Title>
      <Button type="primary">Home</Button>
    </Wrapper>
  );
}

export default Frame;
