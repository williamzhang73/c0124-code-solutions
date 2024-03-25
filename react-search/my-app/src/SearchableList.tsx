import { ChangeEvent, useState } from 'react';
import { ListItems } from './ListItems';
import { SearchBar } from './SearchBar';
type Props = {
  quotes: string[];
};
export function SearchableList({ quotes }: Props) {
  const [input, setInput] = useState('');
  let mappedQuotes;
  const message = 'No items match the filter.';
  if (input === '') {
    mappedQuotes = quotes.map((item, index) => (
      <li key={index} style={{ textAlign: 'left' }}>
        {item}
      </li>
    ));
  } else {
    const filtered = quotes.filter((list) => list.includes(input));
    if (filtered.length > 0) {
      mappedQuotes = filtered.map((item, index) => (
        <li key={index} style={{ textAlign: 'left' }}>
          {item}
        </li>
      ));
    }
  }
  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setInput(value);
  }
  return (
    <>
      <SearchBar handleSearchChange={handleSearchChange} input={input} />
      <ListItems mappedQuotes={mappedQuotes} message={message} />
    </>
  );
}
