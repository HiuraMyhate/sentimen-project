import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# Dataset contoh (ganti dengan data sendiri)
teks = [
    "produknya bagus dan cepat",
    "mantap sekali saya puas",
    "pengiriman lambat dan barang rusak",
    "saya kecewa barangnya jelek"
]
label = ["positif", "positif", "negatif", "negatif"]

# TF-IDF + Model
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(teks)

model = MultinomialNB()
model.fit(X, label)

# Simpan model sebagai file
with open("model.pkl", "wb") as f:
    pickle.dump((model, vectorizer), f)