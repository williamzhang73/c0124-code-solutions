type Props = {
  next: string;
  index: number;
  setIndex: (index: number) => void;
  length: number;
};
export function NextButton({ next, index, setIndex, length }: Props) {
  function handleClick() {
    if (index === length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <div>
      <button onClick={handleClick}>{next}</button>
    </div>
  );
}
