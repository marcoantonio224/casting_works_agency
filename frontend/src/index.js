import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import history from "./utils/history";

// Custom domain variable for Auth0 from .env file
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};
console.log(window.location.origin)
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri='http://127.0.0.1:3000/'
        >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
