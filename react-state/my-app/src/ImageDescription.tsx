import { useState } from 'react';
type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [index, setIndex] = useState(0);
  function handleDesClick() {
    if (index >= imageDescrip.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div>
      <p onClick={handleDesClick}>{imageDescrip[index]}</p>
    </div>
  );
}
