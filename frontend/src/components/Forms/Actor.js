import react from 'react';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {postData} from '../../api/api';
import { useAuth0 } from '@auth0/auth0-react';

function ActorsForm (props) {
  const [actor, setActor] = useState({});
  const { register, handleSubmit } = useForm();
  const { token } = props; // Get Auth0 token

  return (
    <div>
      <h4>Add Actor</h4>
      <Form onSubmit={handleSubmit(props.onSubmitForm)}>
        <Form.Group >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter full name"
            ref={register}
            required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            ref={register}
            name="age"
            min="14"
            max="100"
            placeholder="Age"
            required/>
        </Form.Group>

        <Form.Group >
          <Form.Label>Select Gender</Form.Label>
          <Form.Control as="select" ref={register} name="gender" required>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Rather not say</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ActorsForm;