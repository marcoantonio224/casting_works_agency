import React from 'react';
import Home from './components/Home/index';
import Actors from './components/Actors/index';
import Movies from './components/Movies/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logos from './assets/images/casting_logos.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/actors" component={Actors} />
            <Route path="/movies" component={Movies} />
            {/* <Route path="/about">
              <AboutUs />
              </Route> */}
            </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
