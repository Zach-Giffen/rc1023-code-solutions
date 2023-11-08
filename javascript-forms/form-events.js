function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

const $name = document.querySelector('#user-name');
const $email = document.querySelector('#user-email');
const $message = document.querySelector('#user-message');

$name.addEventListener('click', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('keyup', handleInput);

$email.addEventListener('click', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('keyup', handleInput);

$message.addEventListener('click', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('keyup', handleInput);
