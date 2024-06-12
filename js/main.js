const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const getPostsBtn = document.querySelector("button");

getPostsBtn.addEventListener("click", () => {
  fetch(postsUrl);
});
