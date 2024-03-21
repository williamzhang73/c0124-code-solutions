import { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [charCount, setCharCount] = useState(0);
  const label = <label htmlFor="password">Password:</label>;
  const input = (
    <input type="text" id="password" onChange={handleCharChange}></input>
  );
  /*   const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*d)(?=.*[!#$%&?]).{8,}$/;
  const formatResult = passwordRegEx.test(); */
  let message = '';
  let passwordFormat = false;
  if (charCount === 0) {
    message = 'A password is required.';
    passwordFormat = false;
  } else if (charCount < 8) {
    message = 'Your password is too short.';
    passwordFormat = false;
  } else {
    message = '';
    passwordFormat = true;
  }
  const pMessage = (
    <p className="message" style={{ textAlign: 'left' }}>
      {message}
    </p>
  );
  function handleCharChange() {
    setCharCount(charCount + 1);
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
