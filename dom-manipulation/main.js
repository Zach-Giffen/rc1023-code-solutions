let counter = 0;

const $hotButt = document.querySelector('.hot-button');

const $clickCounter = document.querySelector('.click-count');

$hotButt.addEventListener('click', () => {
  counter++;
  $clickCounter.textContent = 'Clicks:' + counter;

  if (counter < 4) {
    $hotButt.className = 'hot-button cold';
  } else if (counter < 7) {
    $hotButt.className = 'hot-button cool';
  } else if (counter < 10) {
    $hotButt.className = 'hot-button tepid';
  } else if (counter < 13) {
    $hotButt.className = 'hot-button warm';
  } else if (counter < 16) {
    $hotButt.className = 'hot-button hot';
  } else {
    $hotButt.className = 'hot-button nuclear';
  }
});
