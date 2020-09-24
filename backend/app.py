import os
import json
from flask import Flask, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import exc
from flask_cors import CORS
from database.models import (
    setup_db,
    Actor,
    Movie
)

from auth.auth import AuthError, requires_auth

def create_app(test_config=None):
  app = Flask(__name__)
  setup_db(app)
  CORS(app)

  @app.route('/', methods=['GET'])
  def render_welcome():
    return "Welcome to Casting Works"

############### ACTORS API ##########################
#####################################################

  # Get Actors Router
  @app.route('/actors', methods=['GET'])
  @requires_auth('get:actors')
  def get_actors(token):
    # Get all actors
    try:
      actors = Actor.query.order_by(Actor.id).all()
      serialized_actors = [actor.short() for actor in actors]
      return jsonify({
        "success": True,
        "actors": serialized_actors
      })
    except:
      abort(404)
  # Post Actors Router
  @app.route('/actors', methods=['POST'])
  @requires_auth('post:actors')
  def create_actors(token):
    try:
      # Get json object
      body = request.get_json()
      name = body.get('name', None)
      age = body.get('age', None)
      gender = body.get('gender', None)
      # Save the new actor
      actor = Actor(name=name, age=age, gender=gender)
      actor.insert()
      # Return
      return jsonify({"success":True, "new_actor": actor.short()})
    except:
      abort(422)

  # Edit Actors Router
  @app.route('/actors/<int:id>', methods=['PATCH'])
  @requires_auth('edit:actors')
  def edit_actors(token, id):
    try:
      # Update Actor
      # Get JSON request object
      body = request.get_json()
      name = body.get("name", None)
      age = body.get("age", None)
      gender = body.get("gender", None)
      # Reassign actor
      actor = Actor.query.filter(Actor.id == id).one_or_none()
      actor.name = name
      actor.age = age
      actor.gender = gender
      # Update actor
      actor.update()

      return jsonify({
        'success': True,
        'updated_actor': [actor.short()]
      })
    except:
      abort(422)

  # Delete Actor Router
  @app.route('/actors/<int:id>', methods=['DELETE'])
  @requires_auth('delete:actors')
  def delete_actors(token, id):
    if id is None:
      abort(404)
    try:
      # Delete Actor
      actor = Actor.query.filter(Actor.id == id).one_or_none()
      actor.delete()
      return jsonify({
          "success": True,
          "delete": id
      })
    except:
      abort(404)

#####################################################
#####################################################


################ MOVIES API #########################
#####################################################

  # Get Movies Router
  @app.route('/movies', methods=['GET'])
  @requires_auth('get:movies')
  def get_movies(token):
    try:
      # Get Movies
      movies = Movie.query.order_by(Movie.id).all()
      serialized_movies = [movie.short() for movie in movies]
      return jsonify({"success": True,"movies": serialized_movies})
    except:
      abort(422)

  # Create Movies Router
  @app.route('/movies', methods=['POST'])
  @requires_auth('post:movies')
  def create_movies(token):
    try:
      # Get json object
      body = request.get_json()
      title = body.get('title', None)
      release_date = body.get('release_date', None)
      # Save the new movie
      movie = Movie(title=title, release_date=release_date)
      movie.insert()
      # Return
      return jsonify({"success": True, "new_movie": movie.short()})
    except:
      abort(422)

  # Edit Movies Router
  @app.route('/movies/<int:id>', methods=['PATCH'])
  @requires_auth('edit:movies')
  def edit_movies(token, id):
    if id is None:
      abort(404)
    try:
      # Update Movie
      # Get JSON request object
      body = request.get_json()
      title = body.get("title", None)
      release_date = body.get("release_date", None)
      gender = body.get("gender", None)
      # Reassign movie
      movie = Movie.query.filter(Movie.id == id).one_or_none()
      movie.title = title
      movie.release_date = release_date
      # Update movie
      movie.update()
      return jsonify({
        'success': True,
        'updated_movie': [movie.short()]
      })
    except:
      abort(422)

  # Delete Movie Router
  @app.route('/movies/<int:id>', methods=['DELETE'])
  @requires_auth('delete:movies')
  def delete_movies(token, id):
    if id is None:
      abort(404)
    try:
      # Delete Movie
      movie = Movie.query.filter(Movie.id == id).one_or_none()
      movie.delete()
      return jsonify({
          "success": True,
          "delete": id
      })
    except:
      abort(422)


#####################################################
#####################################################


################ Error Handler ######################
#####################################################

  # Error 422 (Unprocessable)
  @app.errorhandler(422)
  def unprocessable(error):
      return jsonify({
                      "success": False,
                      "error": 422,
                      "message": "Unprocessable"
                      }), 422
  # Error 405 (Method not allowed)
  @app.errorhandler(405)
  def not_allowed(error):
      return jsonify({
                      "success": False,
                      "error": 405,
                      "message": "Method not allowed"
                      }), 405
  # Error 404 (Resource not found)
  @app.errorhandler(404)
  def not_found(error):
      return jsonify({
                      "success": False,
                      "error": 404,
                      "message": "Resource not found"
                      }), 404

  # Error 401 (Unauthorized)
  @app.errorhandler(401)
  def unauthorized(error):
      return jsonify({
                      "success": False,
                      "error": 401,
                      "message": "Unauthorized"
                      }), 401

#####################################################
#####################################################


  return app

app = create_app()
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)