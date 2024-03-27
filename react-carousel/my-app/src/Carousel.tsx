import { useEffect, useState } from 'react';
import { Image } from './Image';

import { FaRegCircle } from 'react-icons/fa';
import { PreviousIcon } from './PreviousIcon';
import { NextIcon } from './NextIcon';
type Image = {
  src: string;
  alt: string;
};
type Props = {
  images: Image[];
};
export function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  function handlePrevious() {
    setIndex((index - 1 + images.length) % images.length);
  }

  function handleNext() {
    setIndex((index + 1) % images.length);
  }

  return (
    <div className="row">
      <PreviousIcon onClick={handlePrevious} />
      <div className="column-third">
        <Image src={images[index].src} alt={images[index].alt} />
        {images.map((image, currentIndex) => (
          <FaRegCircle
            key={currentIndex}
            onClick={() => setIndex(currentIndex)}
            style={{ color: index === currentIndex ? 'green' : '' }}
          />
        ))}
      </div>
      <NextIcon onClick={handleNext} />
    </div>
  );
}
