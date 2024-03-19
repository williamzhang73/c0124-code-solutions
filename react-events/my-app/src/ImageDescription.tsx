type Props = {
  imageDescrip: string[];
  index: number;
};

export function ImageDescription({ imageDescrip, index }: Props) {
  return (
    <div>
      <p>{imageDescrip[index]}</p>
    </div>
  );
}
