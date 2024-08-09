function toggleMenu() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "flex") {
    x.style.display = "none"; /* responsive */
  } else {
    x.style.display = "flex";
  }
}