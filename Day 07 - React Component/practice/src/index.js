import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// eslint-disable-next-line
import Headline from './components/Headline.js';
import 'bootstrap/dist/css/bootstrap.css';
import Button from './components/Button';
import AddComponent from './components/AddComponents';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <AddComponent first={1} second={2} />
);

