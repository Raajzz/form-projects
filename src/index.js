import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import LoremGenerator from "./lorem-generator/LoremGenerator";
import ColorGenerator from './color-generator/ColorGenerator'

ReactDOM.render(
  <React.StrictMode>
    <ColorGenerator />
  </React.StrictMode>,
  document.getElementById("root")
);