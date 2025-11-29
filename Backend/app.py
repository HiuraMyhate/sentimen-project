from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

with open("model.pkl", "rb") as f:
    model, vectorizer = pickle.load(f)

@app.route("/predict", methods=["POST"])
def predict():
    teks = request.json["text"]
    X = vectorizer.transform([teks])
    hasil = model.predict(X)[0]
    return jsonify({"sentimen": hasil})

if __name__ == "__main__":
    app.run(debug=True)