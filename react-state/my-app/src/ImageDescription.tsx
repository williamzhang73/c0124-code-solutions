import { useState } from 'react';
type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [index, setIndex] = useState(0);
  if (index > imageDescrip.length - 1) {
    setIndex(0);
  }
  return (
    <div>
      <p onClick={() => setIndex(index + 1)}>{imageDescrip[index]}</p>
    </div>
  );
}
