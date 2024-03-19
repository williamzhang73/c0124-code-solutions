import { useState } from 'react';
type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [index, setIndex] = useState(0);

  function handleCapClick() {
    if (index >= imageCap.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div>
      <h3 onClick={handleCapClick}>{imageCap[index]}</h3>
    </div>
  );
}
