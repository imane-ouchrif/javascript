"use strict";

// ********** CONSTANTS **********

const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
]

const arrowLeft   = document.querySelector(".arrow_left");
const arrowRight  = document.querySelector(".arrow_right");
const dots        = document.querySelector(".dots");
const bannerImg   = document.querySelector(".banner-img");
const bannerText  = document.querySelector("#banner p");

const LENGTH = slides.length;
// ********** VARIABLES **********

let currentSlide = 0;

// ********** FUNCTIONS **********

const switchSlide = (i) => {
  const allDots = dots.children;
  bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
  bannerText.innerHTML = slides[i].tagLine;

  for (let i = 0; i < allDots.length; i++) {
    allDots[i].classList.toggle("dot_selected", i === currentSlide);
  }
  currentSlide = i;
}

const slideToLeft = () => {
  const newIndex = (currentSlide - 1 + LENGTH) % LENGTH;
  switchSlide(newIndex);
}

const slideToRight = () => {
  const newIndex = (currentSlide + 1) % LENGTH;
  switchSlide(newIndex);
}

const addDots = () => {
  for (let i = 0; i < LENGTH; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.addEventListener("click", () => { switchSlide(i) });
    if (i === currentSlide) dot.classList.add("dot_selected");
    dots.appendChild(dot);
  }
}

const addListeners = () => {
  arrowLeft.addEventListener("click", slideToLeft);
  arrowRight.addEventListener("click", slideToRight);
}

// ********** MAIN **********

addDots();
addListeners();

