import { useState } from 'react';
type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [index, setIndex] = useState(0);
  if (index > imageCap.length - 1) {
    setIndex(0);
  }
  return (
    <div>
      <h3 onClick={() => setIndex(index + 1)}>{imageCap[index]}</h3>
    </div>
  );
}
