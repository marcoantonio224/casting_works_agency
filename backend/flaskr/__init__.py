import os
import json
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
from flask_cors import CORS

#from .database.models import db_drop_and_create_all, setup_db, Drink
from auth.auth import AuthError, requires_auth

def create_app():
  app = Flask(__name__)
  # setup_db(app)
  CORS(app)


############### ACTORS API ##########################
#####################################################

  # Get Actors
  @app.route('/actors')
  @requires_auth('get:actors')
  def get_actors(token):
    print('Getting Actors...')
    return jsonify({"message": "Actors"})

  # Post Actors
  @app.route('/actors')
  @requires_auth('post:actors')
  def create_actors(token):
    print('Creating a new actor actor...')
    return jsonify({"message": "Actors"})

  # Edit Actors
  @app.route('/actors')
  @requires_auth('edit:actors')
  def edit_actors(token):
    print('Edit Actors...')
    return jsonify({"message": "Actors"})

  # Delete Actor
  @app.route('/actors')
  @requires_auth('delete:actors')
  def delete_actors(token):
    print('Edit Actors...')
    return jsonify({"message": "Actors"})

#####################################################
#####################################################


################ MOVIES API #########################
#####################################################

  # Get Movies
  @app.route('/movies')
  @requires_auth('get:movies')
  def get_movies(token):
    print('Getting Movies...')
    return jsonify({"message": "Movies"})

  # Create Movies
  @app.route('/movies')
  @requires_auth('post:movies')
  def create_movies(token):
    print('Creating Movies...')
    return jsonify({"message": "Movies"})

  # Edit Movies
  @app.route('/movies')
  @requires_auth('edit:movies')
  def edit_movies(token):
    print('Edit Movies...')
    return jsonify({"message": "Movies"})

  # Delete Movie
  @app.route('/movies')
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

  if __name__ == '__main__':
    app.run(debug=True)

  return app

