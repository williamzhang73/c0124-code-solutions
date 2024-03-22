type Props = {
  prev: string;
  index: number;
  setIndex: (index: number) => void;
  length: number;
};
export function PrevButton({ prev, index, setIndex, length }: Props) {
  function handleClick() {
    if (index === 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  return (
    <div>
      <button onClick={handleClick}>{prev}</button>
    </div>
  );
}
