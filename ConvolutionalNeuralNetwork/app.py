from flask import Flask, request, jsonify
from PIL import Image
from flask_cors import CORS
from uvicorn.middleware.wsgi import WSGIMiddleware
import numpy as np
import tensorflow as tf
from tensorflow import keras

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/predict', methods=['POST'])
def predict():
    img_file = request.files.get('image')
    universe = request.form.get('universe')
    if img_file is None:
        return jsonify({"error": "No image received"}), 400
    if universe is None:
        return jsonify({"error": "No universe specified"}), 400

    print(universe)
    img = Image.open(img_file.stream).convert('RGB')
    img = img.resize((180, 180))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    predictions = []
    if universe == "thomas":
        ttte_model = tf.keras.models.load_model("ttte_model.keras")
        predictions = ttte_model.predict(img_array)
        predictions = predictions.tolist()
    else:
        predictions = {"error": "Unknown universe"}

    return jsonify({"prediction": predictions})

if __name__ == '__main__':
        app.run(debug=True)
# app=WSGIMiddleware(app)