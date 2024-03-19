import './ImageContainer.css';

type Props = {
  imageSrc: string[];
  index: number;
};

export function ImageContainer({ imageSrc, index }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={imageSrc[index]} alt="space-image" />
      </div>
    </div>
  );
}
