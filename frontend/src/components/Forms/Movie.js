import react from 'react';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {postData} from '../../api/api';
import { useAuth0 } from '@auth0/auth0-react';

function MoviesForm (props) {
  const [movie, setMovie] = useState({});
  const { register, handleSubmit } = useForm();
  const { token } = props; // Get Auth0 token

  return (
    <div>
      <h4>Add Movie</h4>
      <Form onSubmit={handleSubmit(props.onSubmitForm)}>
        <Form.Group >
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title of movie"
            ref={register}
            required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Release Date</Form.Label>
          <Form.Control
            type="date"
            ref={register}
            name="release_date"
            placeholder="Release date"
            required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default MoviesForm;