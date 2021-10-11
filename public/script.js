// Display references
document.getElementById("referenceButton").addEventListener("click", () => {
  var links = document.getElementById("referencePages");
  var symbol = document.getElementById("referenceSymbol");
  if (links.style.display === "none") {
    links.style.display = "block";
    symbol.className = "fas fa-angle-down";
  } else {
    links.style.display = "none";
    symbol.className = "fas fa-angle-up";
  }
});
