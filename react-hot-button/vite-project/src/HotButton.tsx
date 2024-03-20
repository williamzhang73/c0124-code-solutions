type Props = {
  onButtonClick: () => void;
  label: string;
  backgroundColor: string;
};
export function HotButton({ onButtonClick, label, backgroundColor }: Props) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: 'black',
  };
  return (
    <>
      <button onClick={onButtonClick} style={buttonStyle}>
        Hot Button
      </button>
      <p>{label}</p>
    </>
  );
}
