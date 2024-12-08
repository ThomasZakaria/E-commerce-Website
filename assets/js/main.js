document.getElementById("btn").onclick = () => {
  event.preventDefault();
  document.getElementById("sbmt").innerHTML = "Submitting...";
};
if (window.innerWidth <= 576) {
  document.getElementById("bg").src = "assets/images/mobilebackground.webp";
  document.getElementById("nav2btn").style.display = "block";
}
document.getElementById("nav2btn").onclick = (event) => {
  event.preventDefault();
  const downElement = document.getElementById("down");
  if (downElement.style.display === "block") {
    downElement.style.display = "none";
  } else {
    downElement.style.display = "block";
  }
};
