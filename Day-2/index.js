const usersContainer = document.querySelector(".users");

const request = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const html = `<article name=${user.id} class="user">${user.name}</article>`;
      usersContainer.insertAdjacentHTML("beforeend", html);
    });
  })
  .catch((error) => console.error(error));
