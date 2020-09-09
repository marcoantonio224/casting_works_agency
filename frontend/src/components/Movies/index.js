import react from 'react';
import React, { useState } from 'react';
import film_shooting from '../../assets/images/film_shooting.jpg'
import casting from '../../assets/images/casting.jpg';

const main = {
}


function Movies() {
  const [movies, setMovies] = useState([]);
  return (
    <section className="main-content-actors">
      <div className="sub-content">
          <div>
            <img src={film_shooting} className="actors" />
          </div>
          <div>
              <h3>
                Movies
              </h3>
              <div>
                <p className="text-content" style={{marginTop:'-3%'}}>
                  Movie, also called film, motion picture or moving picture, is a visual art-form used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. In CastingWorks, some of our motion pictures has
                  been nominated for an Oscar. We take pride in our producions and
                  continue to make more.
                </p>
                <div className="text-content" style={{marginTop:'-6%'}}>
                  <h5>7 Easy steps into producing a movie</h5>
                  <ul>
                    <li>Step 1: Development</li>
                    <li>Step 2: Pre-Production</li>
                    <li>Step 3: Production</li>
                    <li>Step 4: Principal Photography</li>
                    <li>Step 5: Wrap</li>
                    <li>Step 6: Post-Production</li>
                    <li>Step 7: Distribution</li>
                  </ul>
                </div>
              </div>
          </div>
      </div>
      <div>
          <h3>CastingWorks Movies</h3>
          <div>
            {(movies.length === 0) ? <h4>There are no current movies.</h4> :
              {/* This is where the movies go */}
            }
          </div>
      </div>
    </section>
  );
}

export default Movies;