import { GrPrevious } from 'react-icons/gr';
type Props = {
  onClick: () => void;
};
export function PreviousIcon({ onClick }: Props) {
  return <GrPrevious className="column-third GrPrevious" onClick={onClick} />;
}
