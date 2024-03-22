import { useState } from 'react';
import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

type Props = {
  items: string[];
};
const prev = 'Prev';
const next = 'Next';
export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState<number>(0);
  const length = items.length;
  return (
    <>
      <Banner item={items[index]} />
      <PrevButton
        prev={prev}
        index={index}
        setIndex={setIndex}
        length={length}
      />
      <Indicators items={items} index={index} setIndex={setIndex} />
      <NextButton next={next} index={index} setIndex={setIndex} />
    </>
  );
}
