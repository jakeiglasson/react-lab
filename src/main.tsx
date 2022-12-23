import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const IsStrict = true;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  IsStrict ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);
