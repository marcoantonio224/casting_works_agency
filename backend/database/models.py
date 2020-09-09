import os
import json
import re
import random
from sqlalchemy import Column, String, Integer
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy.orm import validates

database_name="casting_works"
database_path="postgres://{}/{}".format('localhost:5432', database_name)

db = SQLAlchemy()

'''
setup_db(app)
    binds a flask application and a SQLAlchemy service
'''
def setup_db(app, database_path=database_path):
  app.config["SQLALCHEMY_DATABASE_URI"] = database_path
  app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
  db.app = app
  db.init_app(app)
  db.create_all()
  migrate = Migrate(app, db)

'''
  Movies
'''
class Movies(db.Model):
  __tablename__ = "movies"

  id = Column(Integer, primary_key=True)
  title = Column(db.String(120), nullable=False)
  release_date = Column(db.String(120), nullable=False)
  picture_path = Column(db.String(300), nullable=False, unique=True, server_default='default.jpg')
  actor = db.relationship('Actor', cascade='all, delete-orphan', backref='movie', lazy=True)

  @validates('title','release_date')
  def validate_moives(self, keys, values):
    specialChars = re.compile('[@_!#$%^&*()<>/\|}{~:]')

    if value == '':
      raise AssertionError('Cannot contain empty fields')

    elif specialChars.search(values) is not None:
      raise AssertionError('Cannot contain special characters')

    return value

  def insert(self):
    db.session.add(self)
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()

  def update(self):
    db.session.commit()



'''
  Actors
'''
class Actors(db.Model):
  __tablename__ = "actors"

  id = Column(Integer, primary_key=True)
  name = Column(db.String(120), nullable=False)
  age = Column(db.String(120), nullable=False)
  gender = Column(db.String(120), nullable=False)
  picture_path = Column(db.String(300), nullable=False, unique=True, server_default='avatar.jpg')
  movie = Column(db.Integer, db.ForeignKey('movie.id') )

  @validates('name', 'age', 'gender')
  def validate_actors(self, keys, values):
    specialChars = re.compile('[@_!#$%^&*()<>/\|}{~:]')

    if value == '':
      raise AssertionError('Cannot contain empty fields')

    elif specialChars.search(values) is not None:
      raise AssertionError('Cannot contain special characters')

    return value

  def insert(self):
    db.session.add(self)
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()

  def update(self):
    db.session.commit()

