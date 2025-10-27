from flask import Flask, request, jsonify
from PIL import Image
import numpy as np

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/predict', methods=['POST'])
def predict():
    img_file = request.files.get('image')
    if img_file is None:
        return jsonify({"error": "No image received"}), 400

    img = Image.open(img_file.stream).convert('RGB')
    img = img.resize((224, 224))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    predicted_class = "Class name here!"  # Dummy response for now

    return jsonify({"prediction": predicted_class})

if __name__ == '__main__':
    app.run(debug=True)
