type Props = {
  imageCap: string[];
  index: number;
};

export function ImageCaption({ imageCap, index }: Props) {
  return (
    <div>
      <h3>{imageCap[index]}</h3>
    </div>
  );
}
