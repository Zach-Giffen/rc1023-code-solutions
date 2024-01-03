import { useState } from 'react';

export function HotButton() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor:
          index < 3
            ? 'darkBlue'
            : index < 6
            ? 'purple'
            : index < 9
            ? 'darkRed'
            : index < 12
            ? 'orange'
            : index < 15
            ? 'yellow'
            : 'white',
      }}>
      Hot Button
    </button>
  );
}
