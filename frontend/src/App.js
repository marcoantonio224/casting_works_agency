import React from 'react';
import Home from './components/Home/index.js';
import Actors from './components/Actors/index.js';
import Movies from './components/Movies/index.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logos from './assets/images/casting_logos.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="sub-header">
              <h2 ><Link to='/' id='title'>Casting Works</Link></h2>
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
        <footer>
          <div>
              <img src={logos} className="logos-image" />
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
