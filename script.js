function toggleBio(card) {
  var bio = card.querySelector(".card-text");
  bio.classList.toggle("d-none");
}

document.addEventListener("DOMContentLoaded", function () {
  var bios = document.querySelectorAll(".card-text");
  bios.forEach(function (bio) {
    bio.classList.add("d-none");
  });
});

function toggleLanguage() {
  const elements = document.querySelectorAll("[data-bosnian], [data-english]");

  elements.forEach((element) => {
    const bosnianText = element.getAttribute("data-bosnian");
    const englishText = element.getAttribute("data-english");
    const currentText = element.innerText;
    if (currentText !== bosnianText && currentText !== englishText) {
      element.setAttribute("data-english", currentText);
    }
    if (element.classList.contains("english")) {
      element.innerText = bosnianText;
    } else {
      element.innerText = englishText;
    }
    element.classList.toggle("english");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const deffaultLanguage = elent.setAttribute("data-bosnian");
  const languageButton = document.querySelector("#language-switcher-btn");
  languageButton.addEventListener("click", toggleLanguage);
});

// Get all thumbnails
var thumbnails = document.querySelectorAll(".gallery-thumbnails img");

// Get the main image
var mainImage = document.querySelector(".gallery-image img");

// Get the gallery control buttons
var prevButton = document.getElementById("gallery-prev");
var nextButton = document.getElementById("gallery-next");

// Set the initial index
var currentIndex = 0;

// Function to display selected thumbnail as main image
function displayImage(index) {
  mainImage.src = thumbnails[index].dataset.image;
  currentIndex = index;
}

// Add click event to thumbnails
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", function () {
    displayImage(index);
  });
});

// Add click event to prev button
prevButton.addEventListener("click", function () {
  var newIndex = currentIndex - 1;
  if (newIndex < 0) {
    newIndex = thumbnails.length - 1;
  }
  displayImage(newIndex);
});

// Add click event to next button
nextButton.addEventListener("click", function () {
  var newIndex = currentIndex + 1;
  if (newIndex >= thumbnails.length) {
    newIndex = 0;
  }
  displayImage(newIndex);
});

// Display the first image initially
displayImage(0);

//on load show onlyamburger and navbar on larger screens

window.onload = () => {
  const hamburger = document.getElementById("toggle-navbar-btn");
  const navbar = document.getElementById("navbarNav");
  navbar.style.display = "none"; // Hide the navbar on load

  // Check the screen size and toggle the navigation accordingly
  hamburger.onclick = function () {
    if (navbar.style.display === "none") {
      navbar.style.display = "flex"; // Show the navbar
      hamburger.innerHTML = '<i class="fas fa-times"></i>'; // Change to close icon
    } else {
      navbar.style.display = "none"; // Hide the navbar
      hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Change back to hamburger icon
    }
  };
};

// Add a resize event listener to handle screen size changes
window.addEventListener("resize", function () {
  const hamburger = document.getElementById("toggle-navbar-btn");
  const navbar = document.getElementById("navbarNav");

  if (window.innerWidth <= 767) {
    navbar.style.display = "none"; // Hide the navbar on small screens
    hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Change to hamburger icon
  } else {
    navbar.style.display = "flex"; // Show the navbar on large screens
    hamburger.innerHTML = '<i class="fas fa-times"></i>'; // Change to close icon
  }
});
