const usersContainer = document.querySelector(".users");
const postsContainer = document.querySelector("ul");

const request = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user, index) => {
      if (index === 0) {
        var html = `<article name=${user.id} class="user active">${user.name}</article>`;
      } else {
        var html = `<article name=${user.id} class="user">${user.name}</article>`;
      }

      usersContainer.insertAdjacentHTML("beforeend", html);
    });
  })
  .catch((error) => console.error(error));

//   Getting posts
async function getPosts(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const posts = await response.json();
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
      const html = `<li>${post.body}</li>`;
      postsContainer.insertAdjacentHTML("beforeend", html);
    });
  } catch (error) {
    console.error(error);
  }
}

usersContainer.addEventListener("click", function (e) {
  getPosts(e.target.attributes.name.nodeValue);
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
});

// initially displaying the first user's post
getPosts(1);
