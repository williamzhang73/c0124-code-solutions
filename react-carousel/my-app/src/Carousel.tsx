import { useEffect, useState } from 'react';
import { Image } from './Image';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import { FaRegCircle } from 'react-icons/fa';
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
  return (
    <div className="row">
      <GrPrevious
        className="column-third GrPrevious"
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
      />

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
      <GrNext
        className="column-third GrNext"
        onClick={() => setIndex((index + 1) % images.length)}
      />
    </div>
  );
}
