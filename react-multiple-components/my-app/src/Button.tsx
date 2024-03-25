type Props = {
  content: string;
  handleClick: () => void;
};
export function Button({ content, handleClick }: Props) {
  return (
    <div>
      <button onClick={handleClick}>{content}</button>
    </div>
  );
}
