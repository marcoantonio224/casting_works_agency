import react from 'react';
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getData } from '../../api/api';
import new_actors from '../../assets/images/new_actors.jpg';
import casting from '../../assets/images/casting.jpg';
import './main.css';


function Actors() {
  const [actors, setActors] = useState([]);
  const [token, setToken] = useState(false);
  const { user, isAuthenticated , getAccessTokenSilently } = useAuth0()

  useEffect(()=>{

    const getUserMetadata = async () => {
      try {
        // Async function for actors audience token
        const accessToken = await getAccessTokenSilently({
          audience: 'actions',
        });

        // Set the token
        setToken(accessToken);

      } catch(err) {
        console.log(err)
      }
    }
    // Call function to obtain token
    getUserMetadata();

  },[]);

  // Send the api token to server for validation
  const res = getData(token, '/actors');

  return (
    <section className="main-content-actors">
      <div className="sub-content">
          <div>
            <img src={new_actors} className="actors" />
          </div>
          <div>
              <h3>
                Actors
              </h3>
              <div>
                <p className="text-content" style={{marginTop:'-3%'}}>
                  There are no formal education requirements to become an actor but a bachelor's degree in theater arts, drama, acting and performing, may be helpful in learning technical skills. Experience is of great importance in this career, as experience leads to bigger and higher paying roles. Skills an actor needs include creativity, speaking skills, literacy and reading skills, memorization, physical stamina, persistence, discipline, dedication, and ability to communicate with a wide variety of people.
                </p>
              </div>
          </div>
      </div>
      <div>
        {(isAuthenticated) ?
          <div>
            <h3>CastingWorks Actresses & Actors</h3>
            <div>
              {(actors.length === 0) ? <h4>There are no current actors.</h4> :
              <div>Actors</div>}
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

export default Actors;