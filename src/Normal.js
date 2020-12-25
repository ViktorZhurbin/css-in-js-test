import React from 'react';

const NormalDiv = (props) => <div {...props} />;

export const Normal = () => {
  const [randomValue, setRandomValue] = React.useState(0);

  return (
    <div>
      <h3>Normal</h3>
      <button onClick={() => setRandomValue(Math.random())}>
        Force Rerender
      </button>
      {new Array(50).fill(null).map((__, i) => (
        <NormalDiv key={i}>Hello World</NormalDiv>
      ))}
    </div>
  );
};
