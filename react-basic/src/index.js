//npx create-react-app [폴더명]
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles.css";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals();
