const $bulb = document.querySelector('.bulb');
const $background = document.querySelector('.background');
let bulbIsOn = true;

$bulb.addEventListener('click', colorSwap);

function colorSwap() {
  if (bulbIsOn) {
    $bulb.className = 'bulb off';
    $background.className = 'background off';
  } else {
    $bulb.className = 'bulb on';
    $background.className = 'background on';
  }

  bulbIsOn = !bulbIsOn;
}
