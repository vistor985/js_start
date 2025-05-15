fetch('./movies.json')
  .then((response) => {
    a = response.json();
    console.log(a);
    return a;
  })
  .then((data) => console.log(data));
