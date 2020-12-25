import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Normal } from './Normal';
import { Emotion } from './Emotion';
import { Styled } from './Styled';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      <Normal />
      <Emotion />
      <Styled />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
