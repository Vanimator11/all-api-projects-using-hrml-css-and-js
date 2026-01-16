const button = document.getElementById('btn');
button.addEventListener('click', getJoke);

function getJoke() {
  fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(jokeData => {
      console.log(jokeData);

      if (jokeData.type === "single") {
        document.getElementById('joke-text').innerHTML =
          `<strong>${jokeData.joke}</strong>`;
      } else {
        document.getElementById('joke-text').innerHTML =
          `<strong>${jokeData.setup} <br> ${jokeData.delivery}</strong>`;
      }
    })
    .catch(error => {
      console.log('error fetching joke', error);
    });
}
