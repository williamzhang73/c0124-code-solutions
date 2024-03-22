import { ChangeEvent, FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setUsername(value);
  }
  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setPassword(value);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formObject = { username, password };
    console.log('state: ', formObject);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:{' '}
        <input
          type="text"
          name="username"
          onChange={handleUsernameChange}
          value={username}
        />
      </label>
      <label>
        Password:{' '}
        <input
          type="text"
          name="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
