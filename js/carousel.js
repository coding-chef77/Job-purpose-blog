const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length * 4;
console.log(totalSlides);
let position = 0;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

function moveToNextSlide() {
  hideAllSlides();

  console.log("TOTALSLIDES");
  console.log(totalSlides);

  if (position === totalSlides - 4) {
    position = 0;
    //console.log(position);
    getcarouselCentent();
  } else {
    position += 4;
    //console.log(position);
    getcarouselCentent();
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  hideAllSlides();

  if (position === 0) {
    position = totalSlides - 4;
    getcarouselCentent();
  } else {
    position -= 4;
    //console.log(position);
    getcarouselCentent();
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

const url = "https://www.hgportfolio.one/wp-json/wp/v2/posts/?per_page=100";

const carouseContainer1 = document.querySelector(".result-carousel-1");
const carouseContainer2 = document.querySelector(".result-carousel-2");
const carouseContainer3 = document.querySelector(".result-carousel-3");
const carouseContainer4 = document.querySelector(".result-carousel-4");
const carouselError = document.querySelector("carousel-error");

async function getcarouselCentent() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    createHTML(data);
  } catch (error) {
    carouselError.innerHTML = `
    <p>Something went wrong, check back later.</p>
    `;
  }
}
getcarouselCentent();

function createHTML(data) {
  const posts = data;

  fillCaroucel(position, posts);
}

function fillCaroucel(position, posts) {
  carouseContainer1.innerHTML = "";
  carouseContainer2.innerHTML = "";
  carouseContainer3.innerHTML = "";
  carouseContainer4.innerHTML = "";
  for (let i = position; i < position + 4; i++) {
    carouseContainer1.innerHTML += ` <div class="results-carousel">
    <a href="list-of-blogs.html?id=${posts[i].id}&title=${posts[i].title.rendered}">
    <h2>${posts[i].title.rendered}</h2>
    </a>
    </div>`;
    carouseContainer2.innerHTML += ` <div class="results-carousel">
    <a href="list-of-blogs.html?id=${posts[i].id}&title=${posts[i].title.rendered}">
    <h2>${posts[i].title.rendered}</h2>
    </a>
    </div>`;
    carouseContainer3.innerHTML += ` <div class="results-carousel">
    <a href="list-of-blogs.html?id=${posts[i].id}&title=${posts[i].title.rendered}">
    <h2>${posts[i].title.rendered}</h2>
    </a>
    </div>`;
    carouseContainer4.innerHTML += ` <div class="results-carousel">
    <a href="list-of-blogs.html?id=${posts[i].id}&title=${posts[i].title.rendered}">
    <h2>${posts[i].title.rendered}</h2>
    </a>
    </div>`;
  }
}
