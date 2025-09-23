from flask import Flask
from asgi_lifespan import LifespanManager

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"