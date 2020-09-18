import react from 'react';
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getData, postData, editData, deleteData } from '../../api/api';
import EditForm from '../Forms/EditMovie';
import { Button, Modal } from 'react-bootstrap';
// import './main.css';


function ModalComponent({category, token, getMovies}) {
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
          <EditForm
            category={category}
            token={token}
            getMovies={getMovies}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalComponent;