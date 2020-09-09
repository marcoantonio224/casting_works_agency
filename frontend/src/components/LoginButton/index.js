import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

// This login button sends the user to Auth0 login
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
      <Button
        variant="outline-info"
        onClick={() => loginWithRedirect()}>
        Log In
      </Button>
  );
}

export default LoginButton;