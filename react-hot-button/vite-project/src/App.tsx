import { useState } from 'react';
import './App.css';
import { HotButton } from './HotButton';
const backgroundColor = [
  'rgb(155,113,139)',
  'rgb(103,78,167)',
  'rgb(224,102,102)',
  'rgb(216,156,94)',
  'rgb(255,255,0)',
  'rgb(255,255,255)',
];
export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  const label = `${count} Clicks`;
  let index = 0;
  switch (true) {
    case count < 3:
      index = 0;
      break;
    case count < 6:
      index = 1;
      break;
    case count < 9:
      index = 2;
      break;
    case count < 12:
      index = 3;
      break;
    case count < 15:
      index = 4;
      break;
    default:
      index = 5;
      break;
  }
  return (
    <>
      <div>
        <HotButton
          onButtonClick={handleClick}
          label={label}
          backgroundColor={backgroundColor[index]}
        />
      </div>
    </>
  );
}
