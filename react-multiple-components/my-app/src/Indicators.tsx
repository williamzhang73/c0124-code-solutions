type Props = {
  items: string[];
  index: number;
  setIndex: (index: number) => void;
};
export function Indicators({ items, index, setIndex }: Props) {
  const mappedItem = items.map((item, itemIndex) => (
    <button
      key={itemIndex}
      style={{
        backgroundColor: itemIndex === index ? 'lightblue' : undefined,
      }}
      onClick={() => {
        setIndex(itemIndex);
      }}>
      {itemIndex}
    </button>
  ));
  return mappedItem;
}
