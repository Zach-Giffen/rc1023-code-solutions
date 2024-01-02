import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export function ToggleButton({ text, color }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('this is the value returned by use state:', isClicked);

  function handleClick() {
    console.log('this is the value before setting:', isClicked);
    setIsClicked(true);
    console.log('this is the value after setting:', isClicked);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isClicked ? color : 'white',
      }}>
      {text}
    </button>
  );
}
