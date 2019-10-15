import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
const Titles = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: flex;
`;

function Login() {
  return (
    <Titles>
      login
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
    </Titles>
  );
}

export default Login;
