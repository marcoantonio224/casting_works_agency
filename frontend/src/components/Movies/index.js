import react from 'react';
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getData } from '../../api/api';
import film_shooting from '../../assets/images/film_shooting.jpg'
import casting from '../../assets/images/casting.jpg';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState(false);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(()=>{
    // Async function for movies audience token
    const getUserMetadata = async () => {
      try {

        // Grab token from auth0
        const accessToken = await getAccessTokenSilently({
          audience: 'actions'
        });

        setToken(accessToken);

      } catch(err) {
        console.log(err)
      }
    }

    // Call function to obtain token
    getUserMetadata();

  },[]);

  const data = getData(token, '/movies');

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
              </div>
          </div>
      </div>
      <div>
        {(isAuthenticated) ?
          <div>
            <h3>CastingWorks Movies</h3>
            <div>
              {
                (movies.length === 0) ? <h4>There are no current movies.</h4> :
                <div>Movies</div>
              }
            </div>
          </div>
            :
          <div>
            <h3>Not Authenticated</h3>
          </div>
        }
      </div>
    </section>
  );
}

export default Movies;