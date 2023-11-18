const $openbutton = document.querySelector('.open-button');
const $modal = document.querySelector('.modal-box');
const $closebutton = document.querySelector('.close-button');

$openbutton.addEventListener('click', function () {
  $modal.className = 'modal-box shown';
});

$closebutton.addEventListener('click', function () {
  $modal.className = 'modal-box hidden';
});
