import react from 'react';
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getData, postData } from '../../api/api';
import Form from '../Forms/Movie';
import film_shooting from '../../assets/images/film_shooting.jpg'
import casting from '../../assets/images/casting.jpg';
import './main.css';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState(false);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  // Async function for movies audience token
  const getUserMetadata = async () => {
    try {
      // Grab token from auth0
      const accessToken = await getAccessTokenSilently({
        audience: 'actions'
      });
      // Set token
      setToken(accessToken);
      // Get movies
      if(accessToken) {
        const data_movies = getData(accessToken, '/movies')
        .then(res => {
            if(res) {
              setMovies(res.data.movies);
            }
        })
      }
    // Catch error
    } catch(err) {
      console.log(err)
    }
  }

  function onSubmitForm(formData) {
    // Send new movie to server post '/movies' endpoint
    postData(token, '/movies', formData)
    .then(res=>{
      setMovies([...movies, res.data.new_movie])
    })
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    // Call function to obtain token
    getUserMetadata();

  }, []);
  console.log(movies)
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
                <Form token={token} onSubmitForm={onSubmitForm} />
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
                <div className="movies-container">
                    {movies.map((movie, idx) =>
                      <div key={idx}>
                        <h4>{movie.title}</h4>
                        <h5>{movie.release_date}</h5>
                      </div>
                    )}
                </div>
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