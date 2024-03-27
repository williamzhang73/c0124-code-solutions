import { useCallback, useEffect, useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);
  const memoizedFunction = useCallback(getData, []);
  useEffect(() => {
    getData();
    setCounter((prev) => prev + 1);
  }, [memoizedFunction]);

  function getData() {
    // fetch data
    return { foo: 'bar' };
  }

  return <div>Fetching {counter} times</div>;
}
