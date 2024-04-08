import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./global.scss";
import ThemeContextProvider from './context/theme.context';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//Browser router using to acess everything what they want
root.render(
  <ThemeContextProvider>
  
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ThemeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals;
