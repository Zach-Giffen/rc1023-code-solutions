import { useState } from 'react';
import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

interface RotatingBannerProps {
  items: string[];
}

export function RotatingBanner({ items }: RotatingBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick(): void {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  }

  function handlePrevClick(): void {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
  }

  function handleIndicatorClick(index: number): void {
    setCurrentIndex(index);
  }

  return (
    <div>
      <Banner word={items[currentIndex]} />
      <PrevButton onClick={handlePrevClick} />
      <br />
      <Indicators
        currentIndex={currentIndex}
        items={items}
        onClick={handleIndicatorClick}
      />
      <br />
      <NextButton onClick={handleNextClick} />
    </div>
  );
}
