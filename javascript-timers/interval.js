const countdown = document.querySelector('.countdown-display');
let i = 3;

setInterval(function () {
  if (i > 0) {
    countdown.textContent = i;
    i--;
  } else {
    countdown.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);

clearInterval(countdown);
