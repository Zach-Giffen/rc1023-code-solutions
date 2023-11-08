const $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameValue = $form.querySelector('#user-name').value;
  const emailValue = $form.querySelector('#user-email').value;
  const messageValue = $form.querySelector('#user-message').value;

  const values = {
    name: nameValue,
    email: emailValue,
    message: messageValue,
  };
  console.log(values);
});
