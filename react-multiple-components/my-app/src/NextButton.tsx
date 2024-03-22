type Props = {
  next: string;
};
export function NextButton({ next }: Props) {
  return (
    <div>
      <button>{next}</button>
    </div>
  );
}
