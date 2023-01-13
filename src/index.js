import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import getProducts from './apis/products';
import { BrowserRouter } from 'react-router-dom';


getProducts();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

