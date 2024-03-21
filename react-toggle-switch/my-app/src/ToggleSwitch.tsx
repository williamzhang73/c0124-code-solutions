import { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  let modifierClass = '';
  function handleToggle() {
    /*    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    } */
    setIsOn(!isOn);
  }
  if (isOn) {
    modifierClass = 'is-on';
  }
  return (
    <div className={`toggle-switch ${modifierClass}`}>
      <div className="slider" onClick={handleToggle}>
        <div className="switch"></div>
      </div>
      <span className="state-label">{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
}
