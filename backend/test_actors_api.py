import os
import unittest
import json
import requests
import http.client
from flask_sqlalchemy import SQLAlchemy

from app import create_app
from database.models import setup_db, Actor

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

    # Set Headers for Producer
    # Permissions = [get:actors]
    self.producer_header = {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlluQnRJTEpPUC03ZjBCUEVIelU0ZiJ9.eyJpc3MiOiJodHRwczovL2Nhc3Rpbmd3b3Jrc2ZzbmQudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVmNWRhOTM2YThjYWM2MDA2ZmJiYmFhMCIsImF1ZCI6WyJhY3Rpb25zIiwiaHR0cHM6Ly9jYXN0aW5nd29ya3Nmc25kLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2MDE3MDI1NTgsImV4cCI6MTYwMTc4ODk1OCwiYXpwIjoiSEhYcEtmVWFCOHhyMUVWRjBmZkM2ZWc0dFVhcTYwZE8iLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwicGVybWlzc2lvbnMiOlsiZGVsZXRlOmFjdG9ycyIsImRlbGV0ZTptb3ZpZXMiLCJlZGl0OmFjdG9ycyIsImVkaXQ6bW92aWVzIiwiZ2V0OmFjdG9ycyIsImdldDptb3ZpZXMiLCJwb3N0OmFjdG9ycyIsInBvc3Q6bW92aWVzIl19.D8VLhT2IcBjXnyLtvBfwN8sKncGMR1ZwinVlXzpe-I0gyu_lBNMmyGKxeYW6KgW5TmtepbLEyvB5TK1eMyXjUJcYqg5am9KJPPRB7rorvO-fRUKlCWz_kxJUSiUNsmthsdkLaHpcpOGJu108Xi3HXE_IMz0KzGz0ZqOfOf5NciGeWhDgbyVMGhp9lN1vWZgdM3NePZE3yqEAH7TMJM6HzLMUSmQnx9gcqktlaycGabpw9JCeTi_Wym-3OF8bepOrt5UXgDv-3UdJ_B4o7-vIJeSXUHZkf4Y64v1m7npY16b0zPP4iZSyUctsrFPpcbtz2SJVN51WSt0sxl1kdmk2AA',
      'Content-Type': 'application/json'
    }

    # Set Headers for Director
    # Permissions = [get:actors, post:actors, edit:actors, delete:actors]
    self.director_header = {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlluQnRJTEpPUC03ZjBCUEVIelU0ZiJ9.eyJpc3MiOiJodHRwczovL2Nhc3Rpbmd3b3Jrc2ZzbmQudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVmNWRhNTFhMWQ4MGIxMDA3OGU1ZTZhYiIsImF1ZCI6WyJhY3Rpb25zIiwiaHR0cHM6Ly9jYXN0aW5nd29ya3Nmc25kLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2MDE3NDgzMDIsImV4cCI6MTYwMTgzNDcwMiwiYXpwIjoiSEhYcEtmVWFCOHhyMUVWRjBmZkM2ZWc0dFVhcTYwZE8iLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwicGVybWlzc2lvbnMiOlsiZGVsZXRlOmFjdG9ycyIsImVkaXQ6YWN0b3JzIiwiZWRpdDptb3ZpZXMiLCJnZXQ6YWN0b3JzIiwiZ2V0Om1vdmllcyIsInBvc3Q6YWN0b3JzIl19.Ayy_G9k7cfg4xinPmrcOw5l5IPFSpfG1l5SlW0JCK4G-2wR-0Sf1K-zf06ijiYyV_48RuoBXXdlve_3H-WMb9ALlSn5AD1VUaIa6cQs8qAlPSBNqTzi0X1lJDLm4rpFI8mkrts1v-FuqMIxLr4Y-2NwNlQItgQ714LN6Zs6qVgQgJ9gOQkbrBYH09xwHdcD0em_WZYFxHi5iIupA187JFZIwtwrUSU-x080BCGezFqA_PHwj1kVSRTDfoK5CaQOyqySNLEMVuikDEbkd5jDF8OrUg4imQIYWmCeomXKjjxVnB-qIj8hBBjCg5_OtCFEpJQTT3a9TtKn0n7UsoJ-3DQ',
      'Content-Type': 'application/json'
    }

    # Set Headers for Assistant
    # Permission = [get:actors, post:actors, edit:actors, delete:actors]
    self.assistant_header = {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlluQnRJTEpPUC03ZjBCUEVIelU0ZiJ9.eyJpc3MiOiJodHRwczovL2Nhc3Rpbmd3b3Jrc2ZzbmQudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVmNTcxNzVlMjA3NmE3MDA2NzhmY2VmMSIsImF1ZCI6WyJhY3Rpb25zIiwiaHR0cHM6Ly9jYXN0aW5nd29ya3Nmc25kLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2MDE3NDc1MDMsImV4cCI6MTYwMTgzMzkwMywiYXpwIjoiSEhYcEtmVWFCOHhyMUVWRjBmZkM2ZWc0dFVhcTYwZE8iLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwicGVybWlzc2lvbnMiOlsiZ2V0OmFjdG9ycyIsImdldDptb3ZpZXMiXX0.AYUBIq_SOd-vKEwHZY_l1Pe0rChVwGbCPDg6g2LfinaZHSHr87r0RPqOx7bE0qzUkipmqvNLfeTLXbQ3SdcclKxmlmD6inat7m5uMZPB_l2MPxbf5lgmCXElNlmBfW7KC_irlAFZz9dvxfb3jXCav_5aXuv5svCzPbspLwj3qBcvxNbNMQB9ZPNly1FH9tUnesUD6N36LsmXVKG7GY-IEc3WivLTcjARhq3hBRVSlXDxq3pMjH2Pdo6Yb3RFfWgT176hwFcwNUP4JBfIbJc5cWGXmJ9ViGNu1AZ2MG6nvEwdaPd2xXDunfygzp6JKwDhFTN1s4kPDzlCfU6Qll4NOQ',
      'Content-Type': 'application/json'
    }

    # Set unauthorized token
    self.headers_unauth = {
      'Authorization': 'Bearer token',
      'Content-Type': 'application/json'
    }

    # New actor object success
    self.new_actor = {
      'name':'John Doe',
      'age': '24',
      'gender': 'Male'
    }
    # New actor object failure because of an empty field
    self.new_actor_fail = {
      'name':'',
      'age': '33',
      'gender': 'Male'
    }

    with self.app.app_context():
      self.db = SQLAlchemy(self.app)
      self.db.init_app(self.app)
      # Create tables
      self.db.create_all()
      # Get the first actor in the list to test editing
      self.actor_id = Actor.query.all()[0].short()['id']
      # Get the last actor in the list to test deleting
      self.delete_actor_id = Actor.query.all().pop().short()['id']

  def tearDown(self):
    """ Executed after reach test """
    pass

  #============== GET /actors =================
  # Producer Success Request
  def test_producer_get_actors_success(self):
    response = self.client().get("/actors", headers=self.producer_header)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertEqual(data['success'], True)
    self.assertTrue(data['actors'])

  # Director Success Request
  def test_director_get_actors_success(self):
    response = self.client().get("/actors", headers=self.director_header)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertEqual(data['success'], True)
    self.assertTrue(data['actors'])

  # Assistant Success Request
  def test_assistant_get_actors_success(self):
    response = self.client().get("/actors", headers=self.assistant_header)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertEqual(data['success'], True)
    self.assertTrue(data['actors'])

  # Unauthorized Request
  def test_get_actors_unauthorized(self):
    response = self.client().get( "/actors", headers=self.headers_unauth)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 401)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Unauthorized')

  # Failed Request
  def test_get_actors_failure(self):
    response = self.client().get( "/actorsFail", headers=self.producer_header)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 404)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], "Resource not found")

  # ============== POST /actors =================
  # Producer Success Request
  def test_producer_create_actor_success(self):
    response = self.client().post( '/actors', headers=self.producer_header, data=json.dumps(self.new_actor))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertTrue(data['new_actor'])
    self.assertEqual(data['success'], True)

  # Director Success Request
  def test_director_create_actor_success(self):
    response = self.client().post( '/actors', headers=self.director_header, data=json.dumps(self.new_actor))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertTrue(data['new_actor'])
    self.assertEqual(data['success'], True)

  # Assistant Unauthorized Request
  def test_assistant_create_actor_unauth(self):
    response = self.client().post( '/actors', headers=self.assistant_header, data=json.dumps(self.new_actor))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 401)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Unauthorized')

  # Unauthorized Request
  def test_create_actor_unauthorized(self):
    response = self.client().post( '/actors', headers=self.headers_unauth, data=json.dumps(self.new_actor))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 401)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Unauthorized')

  # Failed Request
  def test_create_actor_failure(self):
    response = self.client().post( "/actors", headers=self.producer_header, data=json.dumps(self.new_actor_fail))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 422)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], "Unprocessable")

  #============== PATCH /actors =================
  # Producer Success Request
  def test_producer_edit_actor_success(self):
    updated_actor = self.new_actor
    response = self.client().patch( '/actors/{}'.format(self.actor_id), headers=self.producer_header, data=json.dumps(updated_actor))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertTrue(data['updated_actor'])
    self.assertEqual(data['success'], True)

  # Director Success Request
  def test_director_edit_actor_success(self):
    updated_actor = self.new_actor
    response = self.client().patch( '/actors/{}'.format(self.actor_id), headers=self.director_header, data=json.dumps(updated_actor))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertTrue(data['updated_actor'])
    self.assertEqual(data['success'], True)

  # Assistant Unauthorized Request
  def test_assistant_edit_actor_unauth(self):
    updated_actor = self.new_actor
    response = self.client().patch( '/actors/{}'.format(self.actor_id), headers=self.assistant_header, data=json.dumps(updated_actor))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 401)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Unauthorized')

  # Unauthorized Request
  def test_edit_actor_unauthorized(self):
    response = self.client().patch( '/actors/{}'.format(self.actor_id), headers=self.headers_unauth, data=json.dumps(self.new_actor))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 401)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Unauthorized')

  # Failed Request
  def test_edit_actor_failure(self):
    response = self.client().patch( '/actors/{}'.format(self.actor_id), headers=self.producer_header, data=json.dumps(self.new_actor_fail))
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 422)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], "Unprocessable")

  #============== DELETE /actors ===============
  # Producer Request Success
  def test_producer_delete_actor_success(self):
    updated_actor = self.new_actor
    response = self.client().delete( '/actors/{}'.format(self.delete_actor_id), headers=self.producer_header)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertEqual(data['success'], True)
    self.assertEqual(data['delete'], self.delete_actor_id)

  # Director Request Success
  def test_director_delete_actor_success(self):
    updated_actor = self.new_actor
    response = self.client().delete( '/actors/{}'.format(self.delete_actor_id), headers=self.director_header)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 200)
    self.assertEqual(data['success'], True)
    self.assertEqual(data['delete'], self.delete_actor_id)

  # Assistant Request Unauthorized
  def test_assistant_delete_actor_unauth(self):
    updated_actor = self.new_actor
    response = self.client().delete( '/actors/{}'.format(self.delete_actor_id), headers=self.assistant_header)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 401)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Unauthorized')

  # Unauthorized Request
  def test_delete_actor_unauthorized(self):
    response = self.client().delete( '/actors/{}'.format(self.delete_actor_id), headers=self.headers_unauth)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 401)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Unauthorized')

  # Failed Request
  def test_delete_actor_failure(self):
    response = self.client().delete( '/actors/dsds{}'.format(self.delete_actor_id), headers=self.producer_header)
    data = json.loads(response.data)
    # Assertions
    self.assertEqual(response.status_code, 404)
    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], "Resource not found")

# Execute the tests
if __name__ == '__main__':
  unittest.main()