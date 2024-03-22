type Props = {
  next: string;
  index: number;
  setIndex: (index: number) => void;
};
export function NextButton({ next }: Props) {
  return (
    <div>
      <button>{next}</button>
    </div>
  );
}
