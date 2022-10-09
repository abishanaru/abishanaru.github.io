// Button for scroll up
let mybutton = document.getElementById("topButton");

// When the user scrolls, show button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clickt on the button, scroll to the top
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener("scroll", () => {
  addStickyClasses();
});

function addStickyClasses() {
  let nav = document.getElementById("nav-main");
  let reference = document.getElementById("reference");
  if (window.scrollY > reference.offsetTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
