# Casting Works Agency - Backend

  ## Description
  This is the backend server for Castin Works Agency, it has 3 roles of
  assitants, directors, and producers. These roles have separate actions they can
  perform in the database through out the application.

  ## Coding Style
  The backend was configured using RESTful API patterns with Flask and Auth0 (a third party authentication system)

  ## Technologies
  Backend: [Python], [Flask], ['SQLAlchemy'], [PostgreSQL]

  ## Getting Started

  ### Create Local Environment
  - If not done so, please install virtual environment. This keeps your dependencies for each project separate and organized:  `pip install virtualenv`

  - Then create the environment inside the src folder:
  1. virtualenv venv
  2. cd venv
  3. source bin/activate
  To **deactivate** environment, type: `deactivate`

  ### Install Prerequisites
  Please install first all the modules for the project to get it started if you
  haven't done so already. Make sure you are in the parent directory of requirements
  txt.
  Command: `pip install -r requirements.txt`

  ## Environment Variables
  This application contains variables for
  - FLASK_APP
  - FLASK_ENV
  - AUTH0_DOMAIN
  - AUTH0_CLIENT_ID
  These are imperative to the application and should be kept private and handled with caution.

  ### Server Side Development
  To run a Flask application, make sure you set up the proper environmental variables
  within the command line and run the application for the backend. Heroku automatically
  runs variables configured in their settings. In local development, you can check the
  variables in the `.env` folder in the root directory.

  ### Database Setup.
  This application uses Heroku's Postgres for database management.

  ### Commands:
  To run this application locally, please run in the `backend` directory: `flask run`. Then the application will begin on [CastingWorks](http://localhost:5000)

  ### Authentication
  Our application consists of an authenticated system with Auth0. There are 3 Roles
  for a user, only 3 require permission of for certain operations delineated below:

  1. **Assistant**
    `permissions[get:actors, get:movies]`

  2. **Director**
    `permission[get:actors, post:actors, edit:actors, delete:actors, get:movies, edit:movies]`

  3. **Producer**
    `permission[get:actors, post:actors, edit:actors, delete:actors, get:movies, post:movies, edit:movies, delete:movies]`

  Only the developer who created the Auth0 application/api can assign roles to
  particular email addresses. The permission allows the user to perform certain tasks,
  otherwise would get a 401 error **Unauthorized**.

  - `get:actors`: Able to see an actor's details

  - `post:actors`: Able to create a new actor.

  - `edit:actors`: Edit an existing actor.

  - `delete:actors`: Delete a movie.

  - `get:movies`: Able to see a movie's details

  - `post:movies`: Able to create a new movie.

  - `edit:movies`: Edit an existing movie.

  - `delete:movies`: Delete a movie.


  These permissions come from a valid/authenticated token from Auth0. If not familiar
  with Auth0, please click link below to learn about it [https://auth0.com/docs/get-started]

  ### API Endpoints.


  **Local URL**: [http://127.0.0.1:5000]
  **Deployed URL**: [https://casting-works-fsnd.herokuapp.com] [https://casting-works-server.herokuapp.com]

  **API Keys**: This version of the application **does**  require authentication or API Keys.

  ## Postman Tests
  Our RESTful API application are tested using postman.
  If you do not have postman installed, please take the time to install it
  [https://www.postman.com/downloads/]

  [View the postman tests here.](./postman_tests)

  ## Unit Testing
  This application consists of unit testing with Python Unit Test Module. There are two separate
  files for separate categories (Actors and Movies). If you want to test run each test, then
  make sure you are in the project directory of backend and type via commandline:
  - Actors:  `python3 test_actors_api.py`
  - Movies: `python3 test_movies_api.py`


  ### Actors
  TYPE: `GET`
  API Endpoint: `https://casting-works-server.herokuapp.com/actors`

  **Output**

  - 200: `{'actors': [{'age': 24, .............. 'id': 52, 'name': 'John Doe'}], 'success': True}`
  - 401: `{'error': 401, 'message': 'Unauthorized', 'success': False}`
  - 404  `{'error': 404, 'message': 'Resource not found', 'success': False}`

  TYPE: `POST`
  API Endpoint: `https://casting-works-server.herokuapp.com/actors`

  **Output**

  - 200: `{'new_actor': {'age': 24, 'gender': 'Male', 'id': 66, 'name': 'John Doe'}, 'success': True}`
  - 401: `{'error': 401, 'message': 'Unauthorized', 'success': False}`
  - 404  `{'error': 422, 'message': 'Unprocessable', 'success': False}`

  TYPE: `PATCH`
  API Endpoint: `https://casting-works-server.herokuapp.com/actors/28`

  **Output**

  - 200: `{'success': True, 'updated_actor': [{'age': 24, 'gender': 'Male', 'id': 28, 'name': 'John Doe'}]}`
  - 401: `{'error': 401, 'message': 'Unauthorized', 'success': False}`
  - 404  `{'error': 422, 'message': 'Unprocessable', 'success': False}`

  TYPE: `DELETE`
  API Endpoint: `https://casting-works-server.herokuapp.com/actors/28`

  **Output**

  - 200: `{'delete': 28, 'success': True}`
  - 401: `{'error': 401, 'message': 'Unauthorized', 'success': False}`
  - 404  `{'error': 404, 'message': 'Resource not found', 'success': False}`

  ### Movies
  TYPE: `GET`
  API Endpoint: `https://casting-works-server.herokuapp.com/movies`

  **Output**

  - 200: `{'movies': [{'id': 1, 'release_date': '2021-09-30', ... 'title': 'Spider Man 10'}], 'success': True}`
  - 401: `{'error': 401, 'message': 'Unauthorized', 'success': False}`
  - 404  `{'error': 404, 'message': 'Resource not found', 'success': False}`

  TYPE: `POST`
  API Endpoint: `https://casting-works-server.herokuapp.com/movies`

  **Output**

  - 200: `{'new_movie': {'id': 18, 'release_date': '2021-09-30', 'title': 'Spider Man 11'}, 'success': True}`
  - 401: `{'error': 401, 'message': 'Unauthorized', 'success': False}`
  - 404  `{'error': 422, 'message': 'Unprocessable', 'success': False}`

  TYPE: `PATCH`
  API Endpoint: `https://casting-works-server.herokuapp.com/movies/1`

  **Output**

  - 200: `{'success': True, 'updated_movie': [{'id': 1, 'release_date': '2021-09-30', 'title': 'Spider Man 11'}]}`
  - 401: `{'error': 401, 'message': 'Unauthorized', 'success': False}`
  - 404  `{'error': 422, 'message': 'Unprocessable', 'success': False}`

  TYPE: `DELETE`
  API Endpoint: `https://casting-works-server.herokuapp.com/movies/18`

  **Output**

  - 200: `{'delete': 18, 'success': True}`
  - 401: `{'error': 401, 'message': 'Unauthorized', 'success': False}`
  - 404  `{'error': 404, 'message': 'Resource not found', 'success': False}`

  ### Accounts Registered
  Here are some accounts registered with already with Auth0, feel free to login with these credentials to access and test priviledges

  - **Assitant**:

    email: assistant@gmail.com

    password: ***Assistant123***

  - **Director**:

      email: directorcw@gmail.com

      password: ***Director123***

  - **Producer**:

      email: producercw@gmail.com

      password: ***Producer123***

  ## Deployment
  This application is deployed in Heroku. Keep in mind that there
  are 2 separate hosting applications (one for frontend/backend).
  The backend domain name is:
  `https://casting-works-server.herokuapp.com`

  ## Authors
  - Marco A. Canchola (Full Stack Developer)
  - Udacity Instructors

  ## Acknowledgements
  - Udacity
  - Auth0 (https://auth0.com/)
  - Python Docs (https://docs.python.org/3/tutorial/venv.html)
  - Postman (https://www.guru99.com/postman-tutorial.html)
