const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();
  // console.log(2);
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    // console.log(3);
    if (this.readyState === 4) {
      if (this.status === 200) {
        // console.log(1);
        jokeEl.innerText = JSON.parse(this.responseText).value;
        // console.log(JSON.parse(this.responseText).value);
      } else {
        jokeEl.innerText = 'error';
      }
    }
  };
  xhr.send();
};

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
