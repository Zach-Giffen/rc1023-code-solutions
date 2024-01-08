import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(
      `{username: ${formData.get('username')} password: ${formData.get(
        'password'
      )}} `
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input type="text" name="username"></input>
      </label>
      <label>
        Password: <input type="password" name="password"></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
