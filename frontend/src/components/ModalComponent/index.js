import react from 'react';
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getData, postData, editData, deleteData } from '../../api/api';
import EditFormActor from '../Forms/EditActor';
import EditFormMovie from '../Forms/EditMovie';
import { Button, Modal } from 'react-bootstrap';


function ModalComponent({category, token, getData, form}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="outline-light" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {(form === 'actors')?

              <EditFormActor
                category={category}
                token={token}
                getActors={getData}
                handleClose={handleClose}
              />

                :

              <EditFormMovie
                category={category}
                token={token}
                getMovies={getData}
                handleClose={handleClose}
              />
          }
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalComponent;