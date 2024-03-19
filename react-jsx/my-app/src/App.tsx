import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React JSX</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Total Button Clicks: {count}
        </button>
        <p>
          Answers to Quiz Question 1: JSX is a syntax extension for javascript,
          commonly used in React to write HTML structure in the same file as
          javascript code.
        </p>
        <p>
          Answers to Quiz Question 2: with the help of JSX, HTML structure code
          can be used in components, under the hood, React use
          React.createElement() calls to create each element, and then those
          elements are used by React to construct DOM
        </p>
      </div>
    </>
  );
}

export default App;
