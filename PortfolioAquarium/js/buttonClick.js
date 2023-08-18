function clickhome() {
  document.querySelector("#home").style.display = "block";
  document.querySelector("#introduce").style.display = "none";
  document.querySelector("#project").style.display = "none";
  document.querySelector("#contact").style.display = "none";
}
function clickIntro() {
  document.getElementById("home").style.display = "none";
  document.getElementById("introduce").style.display = "block";
  document.getElementById("project").style.display = "none";
  document.getElementById("contact").style.display = "none";
}
function clickProject() {
  document.getElementById("home").style.display = "none";
  document.getElementById("introduce").style.display = "none";
  document.getElementById("project").style.display = "block";
  document.getElementById("contact").style.display = "none";
}
function clickContact() {
  document.getElementById("home").style.display = "none";
  document.getElementById("introduce").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("contact").style.display = "block";
}
