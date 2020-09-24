import os
from flaskr.__init__ import create_app

app = create_app()

if __name__ == "__main__":
  path = os.path.abspath(os.getcwd())
  # print(path)
  app.run()