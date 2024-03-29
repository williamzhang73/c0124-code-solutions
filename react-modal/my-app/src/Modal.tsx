import { ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
};
export function Modal({ children }: Props) {
  const modal = useRef<HTMLDialogElement>(null);
  return <dialog ref={modal}>{children}</dialog>;
}
