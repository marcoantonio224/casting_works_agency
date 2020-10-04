import react from 'react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import casting from '../../assets/images/casting.jpg';
import new_actors from '../../assets/images/new_actors.jpg';
import actors_waiting from '../../assets/images/actors_waiting.jpg';
import casting_directors from '../../assets/images/casting-directors.jpg';
import hollywood_map from '../../assets/images/hollywood_map.jpg';
import movies from '../../assets/images/movies.jpg';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import './main.css';

const main = {
  backgroundImage:`url(${casting})`,
  display: 'grid',
  height: '25em',
  backgroundSize: 'cover',
  backgroundColor: '#000000ad',
  backgroundBlendMode: 'color',
  color: 'white',
}


function Home() {
  const [token, setToken] = useState(false);
  const { user ,getAccessTokenSilently } = useAuth0();
  const { nickname } = user || {};
  return (
    <div className="main-content">
      <div style={main}>
        {(user) ? <h4>{nickname}</h4> : ''}
        <div id='intro'>
          <h5>
                Lights, Camera, Action! Welcome to our casting agency. Where <span className='emphasis'>Legends</span> are made. Where <span className='emphasis'>Dreams</span> come true. Where <span className='emphasis'>Stars</span> are born. Our agency provides opportunites for those who got what it takes to be in the movie business. Consult with one of our agents to get you started. Your new
                life begins now.
          </h5>
          <br />
        </div>
      </div>
      <section className="section1">
        <div>
            <h3>Actors</h3>
            <p className="text-column">
              Famous actors and actresses of stage and screen light up the world from Hollywood to Broadway and beyond. Stars like Marilyn Monroe, Will Smith, Johnny Depp, Robert Downey Jr., Angelina Jolie and Charlie Chaplin illuminate the human condition by bringing compelling characters to life.
              <br />
              <Link to="/actors"><Button variant="outline-light">Actors</Button></Link>
            </p>

        </div>
        <div>
            <h3>About Us</h3>
            <p className="text-column">
              Headquartered in the famous, fancy and wealthy Beverly Hills, CastingWorks is a top talent agency known for fostering the careers of independent film stars. If starting your career off in a Sundance-based film sounds enticing, one day Paradigm may be the top talent agency for you.
            </p>
        </div>
        <div>
            <h3>Movies</h3>
            <p className="text-column">
              Got a movie? Bring us your ideas. Help us create the next Oscar winning film. In our agency, we collaborate with our actors to
              these prospective block busters. Think you can star in a the
              next cinema ? Got the next idea for a big hit ? Don't waste any
              more time and join today.
              <br />
              <Link to="/movies"><Button variant="outline-light">Movies</Button></Link>
            </p>
        </div>
      </section>
      <section className="section2">
          <div>
            <p className="main-text">
                We are a family casting team providing both Principal and Extras Casting, fulfilling all of your production’s casting needs. With our combined experiences in front of and behind the camera, we create a well-rounded and seasoned approach to bring the casting vision to life.
            </p>
            <img src={casting_directors} className="side-image-2" />
            <p className="main-text">
                We are Casting Directors offering casting services in Los Angeles, California and will travel wherever we need to in order to find the best talent for your projects. We use the most advanced casting technology to provide the best outreach and casting presentation available.
                We have already successfully promoted and cast some of Hollywood's Stars on the big screen.
            </p>
          </div>
          <div className="side-container">
              <img src={actors_waiting} className="side-image"/>
              <p className="side-text">
                  Get started by with our auditions to figure out your strengths
                  and weaknesses. Not only do we provide agencies, but also have
                  partnerships with other companies that provide private lessons.
              </p>
          </div>
      </section>
    </div>
  );
}

export default Home;