import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

export function RotatingBanner({ items }) {
  return (
    <div>
      <Banner items={items[0]} />
      <PrevButton />
      <br />
      <Indicators items={items} />
      <br />
      <NextButton />
    </div>
  );
}
