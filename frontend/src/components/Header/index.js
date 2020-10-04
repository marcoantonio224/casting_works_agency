import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import logos from '../../assets/images/casting_logos.jpg';
import './main.css';

function Header() {
  const { user, isAuthenticated, getAccessTokenSilently, loginWithRedirect, logout } = useAuth0();

  const { nickname } = user || {};

  return (
    <header>
        <div className="sub-header">
            <h2 ><Link to='/' id='title'>CastingWorks</Link></h2>
            {(user)?<p>logged in as {nickname}</p>:''}
        </div>
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/actors'>Actors</Link>
                <Link to='/movies'>Movies</Link>
            </ul>
            <ul>
              {isAuthenticated ?
              <Link onClick={() => logout()}>Logout</Link>
              :
              <Link onClick={() => loginWithRedirect()}>Login</Link>
              }

            </ul>
        </nav>
    </header>
  );
}

export default Header;
