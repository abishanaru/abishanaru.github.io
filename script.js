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

// Kanye West API
const kanye_quote = document.getElementById("kanye");
const kanye_button = document.getElementById("kanyebt");

kanye_button.addEventListener("click", getRandomkanyequotes);

function getRandomkanyequotes() {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => (kanye_quote.innerHTML = data.quote));
}

// Contact form submit function

function funcsub() {
  var buton = document.querySelector("#contact-form");
  var screen = document.querySelector(".result");
  var form = document.querySelector("#contact-form");
  var inputs = form.querySelectorAll("input,textarea");
  inputs.forEach((input) => {
    if (input.value == "") {
      screen.innerHTML = "Please enter full information";
      return false;
    } else {
      screen.innerHTML = "Message Sent";
      return true;
    }
  });
}
