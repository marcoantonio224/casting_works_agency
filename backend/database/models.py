import os
import json
import re
import random
from sqlalchemy import Column, String, Integer
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy.orm import validates

# database_name="casting_works"
# database_path="postgres://{}/{}".format('localhost:5432', database_name)

# Check to see if application is hosted on Heroku or local environment
ON_HEROKU = 'ON_HEROKU' in os.environ
if ON_HEROKU:
  # Connected to Heroku
  database_path = os.environ.get("DATABASE_URL")
else:
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
  # db.drop_all()
  db.create_all()
  migrate = Migrate(app, db)

'''
  Movies
'''
class Movie(db.Model):
  __tablename__ = "movies"

  id = Column(Integer, primary_key=True)
  title = Column(db.String(120), nullable=False)
  release_date = Column(db.String(120), nullable=False)

  @validates('title','release_date')
  def validate_moives(self, keys, values):
    specialChars = re.compile('[@_!#$%^&*()<>/\|}{~:]')

    if values == '':
      raise AssertionError('Cannot contain empty fields')

    elif specialChars.search(values) is not None:
      raise AssertionError('Cannot contain special characters')

    return values

  def __init__(self, title, release_date):
    self.title = title
    self.release_date = release_date

  def insert(self):
    db.session.add(self)
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()

  def update(self):
    db.session.commit()

  def short(self):
    return {
        'id': self.id,
        'title': self.title,
        'release_date': self.release_date
    }

  def __repr__(self):
    return json.dumps(self.short())

'''
  Actors
'''
class Actor(db.Model):
  __tablename__ = "actors"

  id = Column(Integer, primary_key=True)
  name = Column(db.String(120), nullable=False)
  age = Column(db.Integer, nullable=False)
  gender = Column(db.String(120), nullable=False)

  @validates('name', 'age', 'gender')
  def validate_actors(self, keys, values):
    specialChars = re.compile('[@_!#$%^&*()<>/\|}{~:]')

    if values == '':
      raise AssertionError('Cannot contain empty fields')

    elif specialChars.search('values') is not None:
      raise AssertionError('Cannot contain special characters')

    return values

  def __init__(self, name, age, gender):
    self.name = name
    self.age = age
    self.gender = gender

  def insert(self):
    db.session.add(self)
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()

  def update(self):
    db.session.commit()

  def short(self):
    return {
        'id': self.id,
        'name': self.name,
        'age': self.age,
        'gender': self.gender
    }

  def __repr__(self):
    return json.dumps(self.short())