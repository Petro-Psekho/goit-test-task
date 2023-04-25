import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { App } from './components/App/App.jsx';
import { Toaster } from './components/Toast/Toast';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Toaster />
    </HashRouter>
  </React.StrictMode>
);
