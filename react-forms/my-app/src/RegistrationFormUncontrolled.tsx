import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);
    console.log('formObject: ', formObject);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input type="text" name="username" />
      </label>
      <label>
        Password: <input type="text" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
