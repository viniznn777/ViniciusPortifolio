let buttonOpen = document.getElementById("OpenMenu");
let buttonClose = document.getElementById("CloseMenu");
let menuMobile = document.getElementById("menuMobile");
let link1 = document.getElementById("link1"),
  link2 = document.getElementById("link2"),
  link3 = document.getElementById("link3"),
  link4 = document.getElementById("link4");
let NavBarOpen = false;

window.addEventListener("resize", () => {
  if (window.innerWidth > 670 && NavBarOpen) {
    closeMenuMobile();
  }
});

function closeMenuMobile() {
  NavBarOpen = false;
  menuMobile.style.marginTop = "-500vh";
  menuMobile.style.animationName = "CloseMenu";
}

function openMenuMobile() {
  NavBarOpen = true;
  menuMobile.style.marginTop = "0vh";
  menuMobile.style.animationName = "OpenMenu";
}

buttonOpen.addEventListener("click", openMenuMobile);
buttonClose.addEventListener("click", closeMenuMobile);

link1.addEventListener("click", closeMenuMobile);
link2.addEventListener("click", closeMenuMobile);
link3.addEventListener("click", closeMenuMobile);
link4.addEventListener("click", closeMenuMobile);
