import React from 'react';
import Home from './components/Home/index.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Casting Works</h2>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Actors</li>
            <li>Movies</li>
            <li>About Us</li>
          </ul>
        </nav>
      </header>
      <section>
        <Home />
      </section>
      <footer>
        <h4>Casting Works</h4>
      </footer>
    </div>
  );
}

export default App;
