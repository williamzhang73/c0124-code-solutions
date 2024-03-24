import { useState } from 'react';
import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { Button } from './Button';

type Props = {
  items: string[];
};
const prev = 'Prev';
const next = 'Next';
export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState<number>(0);
  const length = items.length;
  function handlePrevClick() {
    if (index === 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function handleNextClick() {
    if (index === length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <>
      <Banner item={items[index]} />
      <Button content={prev} handleClick={handlePrevClick} />
      <Indicators items={items} index={index} setIndex={setIndex} />
      <Button content={next} handleClick={handleNextClick} />
    </>
  );
}
