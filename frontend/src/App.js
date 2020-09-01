import React from 'react';
import Header from './components/Header/index.js';
import Home from './components/Home/index.js';
import Actors from './components/Actors/index.js';
import Movies from './components/Movies/index.js';
import Footer from './components/Footer/index.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div>
              <h2>Casting Works</h2>
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/actors" component={Actors} />
            <Route path="/movies" component={Movies} />
            {/* <Route path="/about">
              <AboutUs />
              </Route> */}
            </Switch>
      </Router>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
