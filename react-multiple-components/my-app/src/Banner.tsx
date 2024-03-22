type Props = {
  items: string[];
};
export function Banner({ items }: Props) {
  return <div>{items[0]}</div>;
}
