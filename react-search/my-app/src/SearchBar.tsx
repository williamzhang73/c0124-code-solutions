import { ChangeEvent } from 'react';

type Props = {
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  input: string;
};
export function SearchBar({ handleSearchChange, input }: Props) {
  return (
    <input
      type="text"
      onChange={handleSearchChange}
      name="search"
      value={input}
    />
  );
}
