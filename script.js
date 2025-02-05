let noClickCount = 0;
let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");

noBtn.addEventListener("click", function () {
  noClickCount++;

  if (noClickCount === 1) {
    this.textContent = "Ești sigură?";
  } else if (noClickCount === 2) {
    this.textContent = "Sigur-sigur? 😢";
  } else {
    // Ascundem butonul „Nu” și mărim butonul „Da”
    this.style.display = "none";
    let currentScale = parseFloat(yesBtn.style.transform.replace(/[^0-9.]/g, "") || 1); // Citim scara actuală
    yesBtn.style.transform = `scale(${currentScale + 0.5})`; // Creștem scara cu 0.5
  }
});

yesBtn.addEventListener("click", function () {
  // Afișează mesajul "MERSIIII" și poza
  document.getElementById("content").style.display = "none";
  document.getElementById("thank-you").style.display = "block";
});
