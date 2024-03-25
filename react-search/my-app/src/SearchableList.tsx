import { ChangeEvent, useState } from 'react';
import { ListItems } from './ListItems';
import { SearchBar } from './SearchBar';
type Props = {
  quotes: string[];
};
export function SearchableList({ quotes }: Props) {
  const [input, setInput] = useState('');
  let mappedQuotes;
  if (input === '') {
    mappedQuotes = quotes.map((item, index) => (
      <li key={index} style={{ textAlign: 'left' }}>
        {item}
      </li>
    ));
  } else {
    const filtered = quotes.filter((list) => list.includes(input));
    const filteredList = filtered.map((item, index) => (
      <li key={index} style={{ textAlign: 'left' }}>
        {item}
      </li>
    ));
    mappedQuotes = filteredList;
  }
  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setInput(value);
  }
  return (
    <>
      <SearchBar handleSearchChange={handleSearchChange} input={input} />
      <ListItems mappedQuotes={mappedQuotes} />
    </>
  );
}
