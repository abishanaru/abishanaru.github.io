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

// Mobile Nav
document.getElementById("nav-mobile").addEventListener("click", expandNav);

async function expandNav() {
  let navElements = document.getElementsByClassName("mobile-nav-option");
  let position = 0;
  let zIndex = -1;
  for (let element of navElements) {
    element.style.bottom = `${position}rem`;
    element.style.zIndex = `${zIndex}rem`;
    position += 6;
    zIndex--;
    await new Promise((r) => setTimeout(r, 100));
    element.style.width
      ? (element.style.width = null)
      : (element.style.width = `4.5rem`);
  }
}
