import react from 'react';
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getData, postData, deleteData } from '../../api/api';
import Form from '../Forms/Actor';
import ModalComponent from '../ModalComponent/index';
import new_actors from '../../assets/images/new_actors.jpg';
import casting from '../../assets/images/casting.jpg';
import { Button } from 'react-bootstrap';
import './main.css';


function Actors() {
  const [actors, setActors] = useState([]);
  const [token, setToken] = useState(false);
  const { user, isAuthenticated , getAccessTokenSilently } = useAuth0()

  const getUsers = async () => {
    // Async function for actors audience token
    try {
      // Grab token from auth0
      const accessToken = await getAccessTokenSilently({
        audience: 'actions',
      });
      // Set the token
      setToken(accessToken);
      console.log(accessToken)
      // Get actors
      if(accessToken) {
        getData(accessToken, '/actors')
        .then(res => {
          if(res) {
            setActors(res.data.actors);
          }
        })
     }
     // Catch error
    } catch(err) {
      console.log(err)
    }
  }

  function onSubmitForm(formData) {
    // Send new actor to server post '/actors' endpoint
    postData(token, '/actors', formData)
    .then(res => {
      setActors([...actors, res.data.new_actor]);
    })
    .catch(err => alert("You are unauthorized to perform this action"))
  }

  function deleteActor(id) {
    deleteData(token, 'actors', id)
    .then(res => {
      // Re-render actors
      getUsers();
    })
    .catch(err => alert("You are unauthorized to perform this action") );
  }

  useEffect(()=>{
    // Call function to obtain token
    getUsers();

  }, []);

    return (
      <section className="main-content-actors">
        <div className="sub-content">
            <div>
              <img src={new_actors} className="actors" />
            </div>
            <div>
              <div className="actor-form">
                <Form token={token} onSubmitForm={onSubmitForm} />
              </div>
            </div>
        </div>
        <div>
          {(isAuthenticated) ?
            <div>
              <h3>CastingWorks Actresses & Actors</h3>
              <div>
                {
                  (actors.length === 0) ? <h4>There are no current actors.</h4> :
                  <div className="actors-container">
                    {actors.map((actor, idx) =>
                      <div key={idx}>
                        <h4>{actor.name}</h4>
                        <h5>{actor.age}</h5>
                        <h6>{actor.gender}</h6>
                        <div className="sub-cont-btns">
                          <ModalComponent
                            variant="outline-light"
                            category={actor}
                            token={token}
                            getData={getUsers}
                            form='actors'
                          />
                          <Button
                            variant="outline-light"
                            onClick={()=>deleteActor(actor.id)}>Delete</Button>
                        </div>

                      </div>
                    )}
                  </div>
                }
              </div>
            </div>
              :
            <div>
              <h3>Log in to view actors...</h3>
            </div>
          }
        </div>
      </section>
  );
}

export default Actors;