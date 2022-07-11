import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//components
import AirPlaneApp from './AirPlaneApp';
import { UserContextProvider } from './contexts/UserContextProvider';

//css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <AirPlaneApp />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
);
