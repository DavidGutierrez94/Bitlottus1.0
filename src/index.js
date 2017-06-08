import React from 'react';
import ReactDOM,{mountNode} from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
ReactDOM.render(<navBar />, mountNode);