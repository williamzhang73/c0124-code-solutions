import './ImageContainer.css';
import { useState } from 'react';
type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [index, setIndex] = useState(0);
  if (index > imageSrc.length - 1) {
    setIndex(0);
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={imageSrc[index]}
          onClick={() => setIndex(index + 1)}
          alt="space-image"
        />
      </div>
    </div>
  );
}
