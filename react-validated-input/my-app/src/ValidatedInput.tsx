import { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [char, setChar] = useState('');
  const label = <label htmlFor="password">Password:</label>;
  const input = (
    <input type="text" id="password" onChange={handleCharChange}></input>
  );
  /*   const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*d)(?=.*[!#$%&?]).{8,}$/;
  const formatResult = passwordRegEx.test(); */
  let message = '';
  let passwordFormat = false;
  if (char.length === 0) {
    message = 'A password is required.';
    passwordFormat = false;
  } else if (char.length < 8) {
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
  function handleCharChange(event) {
    const passwordValue = event.target.value;
    /*     console.log('passwordValue: ', passwordValue); */
    setChar(passwordValue);
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
