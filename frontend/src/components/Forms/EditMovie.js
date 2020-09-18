import react from 'react';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { editData } from '../../api/api';
import { useAuth0 } from '@auth0/auth0-react';

function EditForm (props) {
  // Get Auth0 token
  const { token, category: movie, getMovies, handleClose } = props;
  const [title, setTitle] = useState(movie.title);
  const [releaseDate, setReleaseDate ] = useState(movie.release_date);
  const [movies, setMovies] = useState([])
  const { register, handleSubmit } = useForm();

  function onSubmitFormEdit(formData) {
    const { id } = movie;
    const category = 'movies';
    // Edit the value within the input from forms
    editData(token, category, id, formData)
    .then(res => {
      const { title, release_date } = res.data.updated_movie;
      // Set Title
      setTitle(title);
      // Set Release Date
      setReleaseDate(release_date);
      // Get Movies
      getMovies();
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h4>Edit Movie</h4>
      <Form onSubmit={handleSubmit(onSubmitFormEdit)}>
        <Form.Group >
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter Title of movie"
            ref={register}
            value={title}
            onChange={e => setTitle(e.target.value)}
            required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Release Date</Form.Label>
          <Form.Control
            type="date"
            ref={register}
            name="release_date"
            min="14"
            max="100"
            placeholder="Release Date"
            value={releaseDate}
            onChange={e => setReleaseDate(e.target.value)}
            required/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={()=>handleClose()}>
          Submit
        </Button>

      </Form>
    </div>
  );
}

export default EditForm;