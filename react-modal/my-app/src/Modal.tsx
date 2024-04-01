import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
export function Modal({ isOpen, children, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isOpen) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }, [isOpen]);
  function handleKeyDown(e: React.KeyboardEvent<HTMLDialogElement>) {
    if (e.key === 'Escape') {
      onClose();
    }
  }
  return (
    <dialog ref={modal} onKeyDown={handleKeyDown}>
      {children}
    </dialog>
  );
}
