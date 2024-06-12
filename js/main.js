// const postsUrl = "https://jsonplaceholder.typicode.com/posts";
// const getPostsBtn = document.querySelector("button");

// getPostsBtn.addEventListener("click", () => {
//   fetch(postsUrl)
//     .then((response) => response.json())
//     .then((posts) => {
//       posts.forEach((post) => {
//         const p = document.createElement("p");
//         p.textContent = post.title;
//         document.body.appendChild(p);
//       });
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// });

// const photosUrl = "https://jsonplaceholder.typicode.com/photos";
// const getPhotosButton = document.querySelector("button");

// getPhotosButton.addEventListener("click", () => {
//   fetch(photosUrl)
//     .then((response) => {
//       return response.json();
//     })
//     .then((listOfPhotos) => {
//listOfPhotos.length=10;
//       for (let i = 0; i < listOfPhotos.length; i++) {
//         const photoImage = document.createElement("img");
//         document.body.append(photoImage);
//         photoImage.setAttribute("src", listOfPhotos[i].thumbnailUrl);
//       }
//     });
// });

// const postsUrl = "https://jsonplaceholder.typicode.com/posts";
// const sentPostBtn = document.querySelector("button");

// const user = {
//   name: "Alice",
//   age: 29,
//   isAdmin: true,
// };

// sentPostBtn.addEventListener("click", () => {
//   fetch(postsUrl, {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
// });

const url =
  "https://jsonplaceholder.typicode.com/users?username=Bret&email=Sincere@april.biz";

const getUserBtn = document.querySelector("button");
getUserBtn.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log(user[0].company.name);
    });
});
