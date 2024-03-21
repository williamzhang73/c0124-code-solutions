import { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  let modifierClass = null;
  function handleToggle() {
    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }
  if (!isOn) {
    modifierClass = 'is-on';
  }
  return (
    <div className={`toggle-switch ${modifierClass}`}>
      <div className="slider" onClick={handleToggle}>
        <div className="switch"></div>
      </div>
      <span className="state-label">{isOn ? 'OFF' : 'ON'}</span>
    </div>
  );
}
