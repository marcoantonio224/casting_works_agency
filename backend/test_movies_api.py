import os
import unittest
import json
import requests
import http.client
from flask_sqlalchemy import SQLAlchemy

from flaskr import create_app
from database.models import setup_db, Movie

AUTH0_DOMAIN = os.getenv('AUTH0_DOMAIN')
AUTH0_CLIENT_ID = os.getenv('AUTH0_CLIENT_ID')

ALGORITHMS = ['RS256']
API_AUDIENCE = 'actions'

class CastingWorksTestCase(unittest.TestCase):

  """ Set up test cases """
  def setUp(self):
    """ Define the testing variables and initialize """
    self.app = create_app()
    self.app.testing = True
    self.client = self.app.test_client

    self.database_name = "casting_works_test"
    self.database_path = "postgres://{}/{}".format('localhost:5432', self.database_name)
    setup_db(self.app, self.database_path)

    # Set Headers (Authorized token)
    self.headers = {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlluQnRJTEpPUC03ZjBCUEVIelU0ZiJ9.eyJpc3MiOiJodHRwczovL2Nhc3Rpbmd3b3Jrc2ZzbmQudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVmNWRhOTM2YThjYWM2MDA2ZmJiYmFhMCIsImF1ZCI6WyJhY3Rpb25zIiwiaHR0cHM6Ly9jYXN0aW5nd29ya3Nmc25kLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2MDA1ODI0NzYsImV4cCI6MTYwMDY2ODg3NiwiYXpwIjoiSEhYcEtmVWFCOHhyMUVWRjBmZkM2ZWc0dFVhcTYwZE8iLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwicGVybWlzc2lvbnMiOlsiZGVsZXRlOmFjdG9ycyIsImRlbGV0ZTptb3ZpZXMiLCJlZGl0OmFjdG9ycyIsImVkaXQ6bW92aWVzIiwiZ2V0OmFjdG9ycyIsImdldDptb3ZpZXMiLCJwb3N0OmFjdG9ycyIsInBvc3Q6bW92aWVzIl19.VzIQqzWokVL-L2o3eZdwB29clXFMICMXRqJEIIzx3RAFxNvOh8P4kOxdYI_qttiR1olWN5y6qxpDLgq_m7lvZNJqYonpoXslmOFsBuTmHE1Jp19RuF_iWheWUo0JIQ3eBVrsF8zto3CvDHv1_0K3JGWmgr3JOrFcNfZ7wItKwu2rfDQbWZzxLbPMmMbsPkrXba9qF6fKY92d7RakSKWi868Vfrm9eSfTBEaBQ3cFapl3rUMFESk6Tj22X8ZSHehCtwA7CQZw2WC3zQj6gHSoinmQS8PpkuzZnGe5uAsLYOZvbvR9bj__B0MkSMwc1eJpy8QuphLDL3dZrCuXr05DaQ',
      'Content-Type': 'application/json'
    }

    # Set unauthorized token
    self.headers_unauth = {
      'Authorization': 'Bearer token',
      'Content-Type': 'application/json'
    }

    # New movie object success
    self.new_movie = {
      'title':'Spider Man 11',
      'release_date': '2021-09-30'
    }
    # New movie object failure because of an empty field
    self.new_movie_fail = {
      'title':'',
      'relase_date': '2020-09-30'
    }

    with self.app.app_context():
      self.db = SQLAlchemy(self.app)
      self.db.init_app(self.app)
      # Create tables
      self.db.create_all()
      # Get the first actor in the list to test editing
      self.movie_id = Movie.query.all()[0].short()['id']
      # Get the last actor in the list to test deleting
      self.delete_movie_id = Movie.query.all().pop().short()['id']

  def tearDown(self):
    """ Executed after reach test """
    pass

  #============== GET /movies =================
  # Success Request
  def test_get_movies_success(self):
    response = self.client().get("/movies", headers=self.headers)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertEqual(data['success'], True)
    self.assertTrue(data['movies'])

  # Unauthorized Request
  def test_get_movies_unauthorized(self):
    response = self.client().get( "/movies", headers=self.headers_unauth)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 401)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Unauthorized')

  # Failed Request
  def test_get_movies_failure(self):
    response = self.client().get( "/moviesFail", headers=self.headers)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 404)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], "Resource not found")

  #============== POST /movies =================
  # Success Request
  def test_create_movie_success(self):
    response = self.client().post( '/movies', headers=self.headers, data=json.dumps(self.new_movie))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertTrue(data['new_movie'])
    self.assertEqual(data['success'], True)

  # Unauthorized Request
  def test_create_movie_unauthorized(self):
    response = self.client().post( '/movies', headers=self.headers_unauth, data=json.dumps(self.new_movie))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 401)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Unauthorized')

  # Failed Request
  def test_create_movie_failure(self):
    response = self.client().post( "/movies", headers=self.headers, data=json.dumps(self.new_movie_fail))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 422)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], "Unprocessable")

  #============== PATCH /movies =================
  # Success Request
  def test_edit_movie_success(self):
    updated_movie = self.new_movie
    response = self.client().patch( '/movies/{}'.format(self.movie_id), headers=self.headers, data=json.dumps(updated_movie))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertTrue(data['updated_movie'])
    self.assertEqual(data['success'], True)

  # Unauthorized Request
  def test_edit_movie_unauthorized(self):
    response = self.client().patch( '/movies/{}'.format(self.movie_id), headers=self.headers_unauth, data=json.dumps(self.new_movie))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 401)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Unauthorized')

  # Failed Request
  def test_cedit_movie_failure(self):
    response = self.client().patch( '/movies/{}'.format(self.movie_id), headers=self.headers, data=json.dumps(self.new_movie_fail))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 422)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], "Unprocessable")

  #============== DELETE /movies ===============
  def test_delete_movie_success(self):
    updated_actor = self.new_movie
    response = self.client().delete( '/movies/{}'.format(self.delete_movie_id), headers=self.headers)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertEqual(data['success'], True)
    self.assertEqual(data['delete'], self.delete_movie_id)

  # Unauthorized Request
  def test_delete_movie_unauthorized(self):
    response = self.client().delete( '/movies/{}'.format(self.delete_movie_id), headers=self.headers_unauth)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 401)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Unauthorized')

  # Failed Request
  def test_delete_movie_failure(self):
    response = self.client().delete( '/movies/dsds{}'.format(self.delete_movie_id), headers=self.headers)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 404)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], "Resource not found")

# Execute the tests
if __name__ == '__main__':
  unittest.main()