import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './msal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);

