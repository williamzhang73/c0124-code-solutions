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
  return (
    <>
      <Banner items={items} />
      <PrevButton prev={prev} />
      <Indicators items={items} />
      <NextButton next={next} />
    </>
  );
}
