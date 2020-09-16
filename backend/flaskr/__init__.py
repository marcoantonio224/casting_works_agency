import os
import json
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
from flask_cors import CORS

from database.models import (
    setup_db,
    Actor,
    Movie
)

from auth.auth import AuthError, requires_auth

def create_app():
  app = Flask(__name__)
  setup_db(app)
  CORS(app)


############### ACTORS API ##########################
#####################################################

  # Get Actors
  @app.route('/actors', methods=['GET'])
  @requires_auth('get:actors')
  def get_actors(token):
    # Get all actors
    print('getting actors...')
    actors = Actor.query.all()
    serialized_actors = [actor.short() for actor in actors]

    return jsonify({"actors": serialized_actors})

  # Post Actors
  @app.route('/actors', methods=['POST'])
  @requires_auth('post:actors')
  def create_actors(token):
    # Get json object
    body = request.get_json()
    name = body.get('name', None)
    age = body.get('age', None)
    gender = body.get('gender', None)
    # Save the new actor
    actor = Actor(name=name, age=age, gender=gender)
    actor.insert()
    # Return
    return jsonify({"new_actor": actor.short()})

  # Edit Actors
  @app.route('/actors', methods=['PATCH'])
  @requires_auth('edit:actors')
  def edit_actors(token):
    print('Edit Actors...')
    return jsonify({"message": "Actors"})

  # Delete Actor
  @app.route('/actors', methods=['DELETE'])
  @requires_auth('delete:actors')
  def delete_actors(token):
    print('Edit Actors...')
    return jsonify({"message": "Actors"})

#####################################################
#####################################################


################ MOVIES API #########################
#####################################################

  # Get Movies
  @app.route('/movies', methods=['GET'])
  @requires_auth('get:movies')
  def get_movies(token):
    print('getting actors...')
    movies = Movie.query.all()
    serialized_movies = [movie.short() for movie in movies]

    return jsonify({"movies": serialized_movies})

  # Create Movies
  @app.route('/movies', methods=['POST'])
  @requires_auth('post:movies')
  def create_movies(token):
    # Get json object
    body = request.get_json()
    title = body.get('title', None)
    release_date = body.get('release_date', None)
    # Save the new movie
    movie = Movie(title=title, release_date=release_date)
    movie.insert()
    # Return
    return jsonify({"new_movie": movie.short()})

  # Edit Movies
  @app.route('/movies', methods=['PATCH'])
  @requires_auth('edit:movies')
  def edit_movies(token):
    print('Edit Movies...')
    return jsonify({"message": "Movies"})

  # Delete Movie
  @app.route('/movies', methods=['DELETE'])
  @requires_auth('delete:movies')
  def delete_movies(token):
    print('Delete Movies...')
    return jsonify({"message": "Movies"})

#####################################################
#####################################################


################ Error Handler ######################
#####################################################

  # 422
  @app.errorhandler(422)
  def unprocessable(error):
      return jsonify({
                      "success": False,
                      "error": 422,
                      "message": "unprocessable"
                      }), 422
  # 405
  @app.errorhandler(405)
  def not_allowed(error):
      return jsonify({
                      "success": False,
                      "error": 405,
                      "message": "Method not allowed"
                      }), 404
  # 404
  @app.errorhandler(404)
  def not_found(error):
      return jsonify({
                      "success": False,
                      "error": 404,
                      "message": "resource not found"
                      }), 404

  # 401
  @app.errorhandler(401)
  def unauthorized(error):
      return jsonify({
                      "success": False,
                      "error": 401,
                      "message": "Unauthorized"
                      }), 401

#####################################################
#####################################################

  # RUN APPLICATION
  if __name__ == '__main__':
    app.run(debug=True)

  return app

