import { SetStateAction, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

export function Password() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <label
        style={{
          marginRight: 110,
        }}>
        {' '}
        Password{' '}
      </label>
      <br />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{
          margin: 10,
        }}
      />
      {password.length === 0 || (password.length > 0 && password.length < 6) ? (
        <ImCross />
      ) : (
        <FaCheck />
      )}
      {password.length === 0 ? (
        <p className="hidden">A password is required</p>
      ) : null}
      {password.length > 0 && password.length < 6 ? (
        <p>Your password is too short</p>
      ) : null}
    </div>
  );
}
