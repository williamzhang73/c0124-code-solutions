type Props = {
  mappedQuotes: React.ReactElement<HTMLLIElement>[];
};
export function ListItems({ mappedQuotes }: Props) {
  return <ul>{mappedQuotes}</ul>;
}
