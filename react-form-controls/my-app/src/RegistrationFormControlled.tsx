import { FormEvent, ChangeEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(username, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:{' '}
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
      </label>
      <label>
        Password:{' '}
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
