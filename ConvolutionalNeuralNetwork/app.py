from flask import Flask, request, jsonify
from PIL import Image
from flask_cors import CORS
import os
from uvicorn.middleware.wsgi import WSGIMiddleware
import numpy as np
import tensorflow as tf
from huggingface_hub import hf_hub_download
import keras

os.environ["KERAS_BACKEND"] = "tensorflow"

app = Flask(__name__)
CORS(app)
ttte_model_path = hf_hub_download(
     repo_id=os.getenv("REPO"),
     filename="ttte_model.keras",
)
ttte_model = keras.models.load_model(ttte_model_path)

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
        predictions = ttte_model.predict(img_array)
        max_pred_index = np.argmax(predictions, axis=1)[0]
        classes = sorted(os.listdir("../dataset/ttte/train"))
        print(classes)
        print(max_pred_index)
        predictions = predictions.tolist()
        print(predictions)
        most_accurate_pred = predictions[0][max_pred_index]
        most_accurate_class = classes[max_pred_index]
    else:
        predictions = {"error": "Unknown universe"}

    return jsonify({"prediction": most_accurate_pred, "class": most_accurate_class})

# if __name__ == '__main__':
#         app.run(debug=True)
app=WSGIMiddleware(app)