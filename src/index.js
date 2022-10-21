// Importing React,ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// Importing Css file & App Component


// ----------------rendering the Page----------------
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

