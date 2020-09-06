import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logos from '../../assets/images/casting_logos.jpg';
import './main.css';

function Footer() {
  return (
      <footer>
        <div>
            <img src={logos} className="logos-image" />
        </div>
    </footer>
  );
}

export default Footer;
