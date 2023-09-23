import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootswatch has custom bootstrap themes that I was trying out.
// They just modify styles for elements based on bootstrap's class names.
import "bootswatch/dist/quartz/bootstrap.min.css";

// import "bootswatch/dist/minty/bootstrap.min.css";
// import "bootswatch/dist/sketchy/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();