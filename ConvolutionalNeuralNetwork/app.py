from flask import Flask
from uvicorn.middleware.wsgi import WSGIMiddleware

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

app = WSGIMiddleware(app)