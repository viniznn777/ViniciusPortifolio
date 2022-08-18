let topButton = document.getElementById("topButton");

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 900) {
    topButton.style.opacity = "1";
  } else {
    topButton.style.opacity = "0";
  }
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
