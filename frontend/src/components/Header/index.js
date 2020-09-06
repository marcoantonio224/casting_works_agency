import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logos from '../../assets/images/casting_logos.jpg';
import './main.css';

function Header() {
  return (
    <header>
        <div className="sub-header">
            <h2 ><Link to='/' id='title'>CastingWorks</Link></h2>
        </div>
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/actors'>Actors</Link>
                <Link to='/movies'>Movies</Link>
                {/* <Link>About Us</Link> */}
            </ul>
        </nav>
    </header>
  );
}

export default Header;
