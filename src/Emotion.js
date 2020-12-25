import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div``;

export const Emotion = () => {
  const [randomValue, setRandomValue] = React.useState(0);
  return (
    <div>
      <h3>Emotion</h3>
      <button onClick={() => setRandomValue(Math.random())}>
        Force Rerender
      </button>
      {new Array(50).fill(null).map((__, i) => (
        <StyledDiv key={i}>Hello World</StyledDiv>
      ))}
    </div>
  );
};
