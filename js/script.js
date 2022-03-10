const resultContainer = document.querySelector(".results");

const baseUrl = "https://www.hgportfolio.one/wp-json/wp/v2/posts?per_page=10";
const allUrl = "https://www.hgportfolio.one/wp-json/wp/v2/posts?per_page=15";

document.getElementById("load-all").onclick = function loadAll() {
  async function getAll(url) {
    const response = await fetch(url);
    const posts = await response.json();
    resultContainer.innerHTML = "";

    posts.forEach(function (post) {
      resultContainer.innerHTML += `   
      <div class="results-json">
      <a href="list-of-blogs.html?id=${post.id}">
      <h2>${post.title.rendered}</h2>
      </a>
      </div>
      `;
      document.getElementById("disappear").innerHTML = "";
    });
  }

  getAll(allUrl);
};

async function getPosts(url) {
  const response = await fetch(url);
  const posts = await response.json();
  resultContainer.innerHTML = "";

  posts.forEach(function (post) {
    resultContainer.innerHTML += `   
    <div class="results-json">
    <a href="list-of-blogs.html?id=${post.id}">
    <h2>${post.title.rendered}</h2>   
    </a>
    </div>
    `;
  });
}
getPosts(baseUrl);
