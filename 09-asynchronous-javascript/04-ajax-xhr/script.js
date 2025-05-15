const xhr = new XMLHttpRequest();

xhr.open('GET', './movies.json');

xhr.onreadystatechange = function () {
  console.log(this.responseText);
};

xhr.send();
