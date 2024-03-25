type Props = {
  mappedQuotes: JSX.Element[];
  message: string;
};
export function ListItems({ mappedQuotes, message }: Props) {
  return <ul>{mappedQuotes.length > 0 ? mappedQuotes : message}</ul>;
}
