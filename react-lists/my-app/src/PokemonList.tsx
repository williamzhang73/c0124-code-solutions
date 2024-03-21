import { useState } from 'react';

type Entry = {
  number: string;
  name: string;
};
type Props = {
  pokedex: Entry[];
};

export function PokemonList({ pokedex }: Props) {
  const [isSelected, setIsSelected] = useState(false);
  function handleListClick() {
    /*     console.log(item.name); */
    setIsSelected(true);
  }
  const backgroundColor = isSelected ? 'green' : 'black';
  const li = pokedex.map((item) => (
    <li
      key={item.number}
      style={{ textAlign: 'left', backgroundColor: backgroundColor }}
      onClick={handleListClick}>
      {item.name}
    </li>
  ));
  return <ul>{li}</ul>;
}
