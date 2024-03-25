type Props = {
  mappedQuotes: React.ReactElement<HTMLLIElement>[];
  message: string;
};
export function ListItems({ mappedQuotes, message }: Props) {
  return <ul>{mappedQuotes ? mappedQuotes : message}</ul>;
}
