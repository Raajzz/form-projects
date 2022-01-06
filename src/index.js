import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import LoremGenerator from "./lorem-generator/LoremGenerator";

ReactDOM.render(
  <React.StrictMode>
    <LoremGenerator />
  </React.StrictMode>,
  document.getElementById("root")
);