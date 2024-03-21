import { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [chars, setChars] = useState('');
  const label = <label htmlFor="password">Password:</label>;
  const input = (
    <input type="text" id="password" onChange={handleCharChange}></input>
  );
  const passwordRegEx = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

  let message = '';
  let passwordFormat = false;
  if (chars.length === 0) {
    message = 'A password is required.';
    passwordFormat = false;
  } else if (chars.length < 8) {
    message = 'Your password is too short.';
    passwordFormat = false;
  } else {
    const formatResult = passwordRegEx.test(chars);
    if (formatResult) {
      message = '';
      passwordFormat = true;
    } else {
      message = 'password format wrong.';
      passwordFormat = false;
    }
  }
  const pMessage = (
    <p className="message" style={{ textAlign: 'left' }}>
      {message}
    </p>
  );
  function handleCharChange(event) {
    const passwordValue = event.target.value;
    setChars(passwordValue);
  }
  const formatCheck = passwordFormat ? (
    <FcCheckmark />
  ) : (
    <FaTimes style={{ color: 'rgb(208,44,40)' }} />
  );

  return (
    <>
      <div style={{ textAlign: 'left' }}>{label}</div>
      <div>
        {input} {formatCheck}
      </div>
      <div>{pMessage}</div>
    </>
  );
}
