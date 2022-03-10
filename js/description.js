const singleBlogsCont = document.querySelector(".single-blogs");
const blogError = document.querySelector("blog-error");
const title = document.querySelector(".new-title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://www.hgportfolio.one/wp-json/wp/v2/posts/" + id;

const name = params.get("title");

async function getSingleBlog() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    createHtml(details);
  } catch (error) {
    blogError.innerHTML = `<p>Something went wrong, check back later.</p>
                                   
    `;
  }
}
getSingleBlog();

function createHtml(details) {
  const parser = new DOMParser();
  const parsedContent = parser.parseFromString(
    details.content.rendered,
    "text/html"
  );
  const img = parsedContent.getElementsByTagName("img")[0];
  console.log(img);
  singleBlogsCont.innerHTML = `
  <div> 
  <h1 class="main-heading-blogs">${details.title.rendered}</h1>   
  <img alt="picture related to blog" ${img.outerHTML}
  <p>${details.excerpt.rendered}</p> 
  </div>`;
  title.innerHTML = `
  Blog | ${details.title.rendered}`;
}
