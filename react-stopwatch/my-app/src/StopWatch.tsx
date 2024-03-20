import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
export function StopWatch() {
  const [elapsed, setElapsed] = useState(0);
  const [clicked, setClick] = useState(true);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  function handlePlayClick() {
    const newIntervalId = setInterval(
      () => setElapsed((elapsed) => elapsed + 1),
      1000
    );
    setClick(false);
    setIntervalId(newIntervalId);
  }
  function handlePauseClick() {
    setClick(true);

    clearInterval(intervalId);
    setIntervalId(undefined);
  }
  function handleWatchClick() {
    setClick(true);
    setElapsed(0);
  }

  return (
    <div>
      <div className="center" onClick={handleWatchClick}>
        <p className="watch">{elapsed}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        {clicked ? (
          <FaPlay onClick={handlePlayClick} />
        ) : (
          <FaPause onClick={handlePauseClick} />
        )}
      </div>
    </div>
  );
}
