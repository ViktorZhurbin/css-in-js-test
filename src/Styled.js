import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div``;

export const Styled = () => {
  const [randomValue, setRandomValue] = React.useState(0);
  return (
    <div>
      <h3>Styled</h3>
      <button onClick={() => setRandomValue(Math.random())}>
        Force Rerender
      </button>
      {new Array(50).fill(null).map((__, i) => (
        <StyledDiv key={i}>Hello World</StyledDiv>
      ))}
    </div>
  );
};
