document.getElementById('start').addEventListener('click', startChange);

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(myCallback, 1000, 'hello');
  }
}

function myCallback(a) {
  console.log(a, Math.floor(Math.random() * 16777215).toString(16));
}

function stopChange() {
  clearInterval(intervalID);
}

document.getElementById('stop').addEventListener('click', stopChange);
