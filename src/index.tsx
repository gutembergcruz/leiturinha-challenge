import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyles } from './global'

ReactDOM.render(
  <>
    <GlobalStyles>
    </GlobalStyles>
    <React.StrictMode>

      <App />

    </React.StrictMode>
  </>,
  document.getElementById('root')
);
