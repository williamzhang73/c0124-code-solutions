type Props = {
  prev: string;
};
export function PrevButton({ prev }: Props) {
  return (
    <div>
      <button>{prev}</button>
    </div>
  );
}
