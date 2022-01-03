function dayOrNight() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    document.getElementById("bulb").style.visibility = "hidden";
  }
  else {
    document.body.style.backgroundColor = "white";
    document.getElementById("bulb").style.visibility = "visible";
  }
}