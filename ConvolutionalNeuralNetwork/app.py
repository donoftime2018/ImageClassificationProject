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
    # universe = request.form.get('universe')
    if img_file is None:
        return jsonify({"error": "No image received"}), 400

    img = Image.open(img_file.stream).convert('RGB')
    img = img.resize((180, 180))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    ttte_model = tf.keras.models.load_model("ttte_model.keras")
    predictions = ttte_model.predict(img_array)
    # predicted_class = "Class name here!"  # Dummy response for now

    return jsonify({"prediction": predictions.tolist()})

# if __name__ == '__main__':
#         app.run(debug=True)
app=WSGIMiddleware(app)