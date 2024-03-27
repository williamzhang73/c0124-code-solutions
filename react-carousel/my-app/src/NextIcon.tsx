import { GrNext } from 'react-icons/gr';
type Props = {
  onClick: () => void;
};
export function NextIcon({ onClick }: Props) {
  return <GrNext className="column-third GrNext" onClick={onClick} />;
}
