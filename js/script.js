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

const cards = document.querySelectorAll(".profile-card");
cards.forEach(function (card) {
  const bioTrigger = card.querySelector(".bio-trigger");
  card.addEventListener("mouseenter", function () {
    bioTrigger.classList.remove("d-none");
    bioTrigger.classList.add("d-block");
  });
  card.addEventListener("mouseleave", function () {
    bioTrigger.classList.remove("d-block");
    bioTrigger.classList.add("d-none");
  });
});

const thumbnails = document.querySelectorAll(".gallery-thumbnails img");
const image = document.querySelector(".gallery-image img");
const prevButton = document.querySelector(".gallery-prev");
const nextButton = document.querySelector(".gallery-next");
let currentImage = 0;

function showImage(index) {
  image.src = thumbnails[index].dataset.image;
  currentImage = index;
}

function nextImage() {
  if (currentImage < thumbnails.length - 1) {
    showImage(currentImage + 1);
  } else {
    showImage(0);
  }
}

function prevImage() {
  if (currentImage > 0) {
    showImage(currentImage - 1);
  } else {
    showImage(thumbnails.length - 1);
  }
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    showImage(index);
    document.body.classList.add("gallery-open");
  });
});

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

document.addEventListener("keydown", (event) => {
  if (document.body.classList.contains("gallery-open")) {
    if (event.key === "ArrowLeft") {
      prevImage();
    } else if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "Escape") {
      document.body.classList.remove("gallery-open");
    }
  }
});

function toggleLanguage() {
  const elements = document.querySelectorAll("[data-bosnian], [data-english]");

  // Loop through each element and toggle the language
  elements.forEach((element) => {
    const bosnianText = element.getAttribute("data-bosnian");
    const englishText = element.getAttribute("data-english");
    const currentText = element.innerText;

    if (currentText === bosnianText) {
      element.innerText = englishText;
    } else {
      element.innerText = bosnianText;
    }
  });

  // Toggle the language of the button and display only selected language

  function toggleButtonLanguage() {
    const button = document.querySelector(".toggle-slider-label");
    const currentLanguage = button.innerText;
    const otherLanguage = currentLanguage === "EN" ? "BOS" : "EN";

    button.innerText = otherLanguage;
  }
}
