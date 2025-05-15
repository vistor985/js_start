function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}

const timeID = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timeID);
  clearTimeout(timeID);
  console.log('Timer Cancelled');
});
