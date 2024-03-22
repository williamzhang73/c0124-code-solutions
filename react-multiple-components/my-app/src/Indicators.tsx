type Props = {
  items: string[];
};
export function Indicators({ items }: Props) {
  const mappedItem = items.map((item, index) => (
    <button key={index}>{index}</button>
  ));
  return mappedItem;
}
