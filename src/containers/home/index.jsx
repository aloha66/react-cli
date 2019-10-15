import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
// import './index.scss';
const Titles = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: flex;
`;

function Home() {
  return (
    <Titles>
      Home
      <p className="aa">tewe</p>
      <Button type="primary">Home</Button>
    </Titles>
  );
}

export default Home;
