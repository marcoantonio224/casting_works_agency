# fsdn_casting_agency
A casting agency that has to do with directors, producers, and assistants. It consists of dynamic listing, deleting, editing, and adding actors according to Role Based Access Control (RBAC). These users are known to be the Assistant, Director, Producer. It is developed with Auth0, Python FlaskApp, React, and deployed in Heroku.

## Description
  1. **Casting Assistant**
    - Able to view actors and movies.
  2. **Casting Director**
    - Able to view, add, or delete an actor; and edit actors or movies.
  3. **Casting Manager**
    - Able to view, add, delete, edit actors and movies.

## About the Stack
  This application was created based on two different infrastructures, Frontend and Backend.

### Backend

The `./backend` directory contains the Models, Database, Authentication, and API endpoints that make all of this functionality possible. To get the server up and running, simply click to the `./backend` folder and follow the README.md file to get started.

[View the README.md within ./backend for more details.](./backend/README.md)

### Frontend

The `./frontend` directory contains a complete React frontend to interact with the Flask server. It's job is to provide user interface and interaction between the client and server. To get the frontend up and running, simply go to `./frontend` folder and follow the README.md file to get started.

[View the README.md within ./frontend for more details.](./frontend/README.md)


