import { useState } from 'react';

export function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        onClick={handleClick}
        className={toggle ? 'active' : ''}
        style={{
          border: '2px, solid, black',
          borderRadius: '20px',
          backgroundColor: toggle ? 'grey' : 'green',
          marginRight: '15px',
          position: 'relative',
        }}>
        <div
          className="inner-circle"
          style={{
            width: '18px',
            height: '18px',
            border: '2px, solid, black',
            borderRadius: '50%',
            backgroundColor: 'white',
            marginTop: '-9px',
            position: 'absolute',
            left: toggle ? '30%' : '50%',
            transform: toggle ? 'translateX(-50%)' : 'translateX(0)',
          }}></div>
      </button>
      <label
        className={toggle ? 'hidden' : ''}
        style={{
          fontSize: '18px',
        }}>
        ON
      </label>
      <label
        className={toggle ? '' : 'hidden'}
        style={{
          fontSize: '18px',
        }}>
        OFF
      </label>
    </div>
  );
}
