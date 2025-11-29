function showSection(id, element) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });

  document.querySelectorAll('.navbar a').forEach(link => {
    link.classList.remove('active');
  });

  const target = document.getElementById(id);
  target.classList.add('active');
  element.classList.add('active');

  target.classList.remove('animate');
  void target.offsetWidth;
  target.classList.add('animate');
}

document.getElementById("btnAnalisis").addEventListener("click", async function () {
  const teks = document.getElementById("review").value;

  // PANGGIL API PYTHON
  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: teks })
  });

  const data = await response.json();
  const hasil = data.sentimen;

  const popupText = document.getElementById("popupText");

  popupText.className = "";
  popupText.textContent = hasil.toUpperCase();

  if (hasil === "positif") popupText.classList.add("hasil-positif");
  else if (hasil === "negatif") popupText.classList.add("hasil-negatif");
  else popupText.classList.add("hasil-netral");

  document.getElementById("popup").style.display = "flex";
});

function tutupPopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("review").value = "";
}