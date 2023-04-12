import React from 'react';
import { createRoot } from 'react-dom/client';
import './a-propos.css';
import App from './app';

const rootElement = document.getElementById('drop');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);