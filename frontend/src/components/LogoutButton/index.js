import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

// This login button sends the user to Auth0 login
const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
      <Button
        variant="outline-info"
        onClick={() => logout()}>
        Log Out
      </Button>
  );
}

export default LogoutButton;