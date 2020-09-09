import os
import json
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
from flask_cors import CORS

#from .database.models import db_drop_and_create_all, setup_db, Drink
from .auth.auth import AuthError, requires_auth

def create_app():
  app = Flask(__name__)
  # setup_db(app)
  CORS(app)

############### ACTORS API ##########################
  @app.route('/actors')
  @requires_auth('get:actors')
  def get_actors():
    print('actors...')
    return jsonify({"message": "Actors"})

#####################################################


################ MOVIES API #########################

  @app.route('/movies')
  def get_movies():
    return jsonify({"message": "Movies"})

#####################################################


################ Error Handler ######################

  @app.errorhandler(422)
  def unprocessable(error):
      return jsonify({
                      "success": False,
                      "error": 422,
                      "message": "unprocessable"
                      }), 422

  @app.errorhandler(405)
  def not_allowed(error):
      return jsonify({
                      "success": False,
                      "error": 405,
                      "message": "Method not allowed"
                      }), 404

  @app.errorhandler(404)
  def not_found(error):
      return jsonify({
                      "success": False,
                      "error": 404,
                      "message": "resource not found"
                      }), 404

  @app.errorhandler(401)
  def unauthorized(error):
      return jsonify({
                      "success": False,
                      "error": 401,
                      "message": "Unauthorized"
                      }), 401

  if __name__ == '__main__':
    app.run(debug=True)

  return app

