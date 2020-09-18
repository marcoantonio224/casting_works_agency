import react from 'react';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { editData } from '../../api/api';
import { useAuth0 } from '@auth0/auth0-react';

function EditForm (props) {
  // Get Auth0 token
  const { token, category: actor, getUsers, handleClose } = props;
  const [name, setName] = useState(actor.name);
  const [actors, setActors] = useState([])
  const [age, setAge ] = useState(actor.age);
  const [gender, setGender] = useState(actor.gender);
  const { register, handleSubmit } = useForm();

  function onSubmitFormEdit(formData) {
    const { id } = actor;
    const category = 'actors';
    // Edit the value within the input from forms
    editData(token, category, id, formData)
    .then(res => {
      const { name, age, gender } = res.data.updated_actor;
      // Set name
      setName(name);
      // Set age
      setAge(age);
      // Set gender
      setGender(gender);
      // Get users
      getUsers();
    })
    .catch(err => console.log(err))
  }

  useEffect(()=>{

  }, []);

  return (
    <div>
      <h4>Edit Actor</h4>
      <Form onSubmit={handleSubmit(onSubmitFormEdit)}>
        <Form.Group >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter full name"
            ref={register}
            value = {name}
            onChange={e => setName(e.target.value)}
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
            value={age}
            onChange={e => setAge(e.target.value)}
            required/>
        </Form.Group>

        <Form.Group >
          <Form.Label>Select Gender</Form.Label>
          <Form.Control
            as="select"
            ref={register}
            name="gender"
            value={gender}
            onChange={e => setGender(e.target.value)}
            required>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Rather not say</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={()=>handleClose()}>
          Submit
        </Button>

      </Form>
    </div>
  );
}

export default EditForm;