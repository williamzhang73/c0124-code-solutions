type Entry = {
  number: string;
  name: string;
};
type Props = {
  pokedex: Entry[];
};
export function PokemonList({ pokedex }: Props) {
  const li = pokedex.map((item) => (
    <li key={item.number} style={{ textAlign: 'left' }}>
      {item.name}
    </li>
  ));
  return <ul>{li}</ul>;
}
