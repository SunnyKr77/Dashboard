import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
<Auth0Provider
    domain="dev-evv5tnmpf4104mg5.us.auth0.com"
    clientId="CUG9VMMYbGn4Kl9CuPNOj22eZRsA6TeC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
