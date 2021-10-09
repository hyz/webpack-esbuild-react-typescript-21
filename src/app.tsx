import React from "react";
import styled from "styled-components";
import test from "./test.json";

const TestDiv = styled.div`
  background-color: lightgrey;
`;

const testObject = {
  a: 4,
  b: 3,
};

const App: React.FC = () => {
  const t = "Hello react world!";
  return (
    <div>
      {t}
      <section>TEST_ENV: {process.env.TEST_ENV}</section>
      <section>NODE_ENV: {process.env.NODE_ENV}</section>
      <section>test: {testObject.a}</section>
      <TestDiv>
        <div>{test.test}</div>
      </TestDiv>
    </div>
  );
};

export default App;
