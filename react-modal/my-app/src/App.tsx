import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

function App() {
  /*   const modal = useRef<HTMLDialogElement>(null);
  function handleButtonClick() {
    modal.current?.showModal();
  }
  function handleDialogCancel() {
    modal.current?.close();
  }
  function handleDialogDelete() {
    alert('deleted');
    modal.current?.close();
  } */
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}>
        Delete me!
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}>
        <p>Really want to delete?</p>
        <button
          onClick={() => {
            setIsOpen(false);
          }}>
          Cancel
        </button>
        <button
          onClick={() => {
            alert('deleted');
            setIsOpen(false);
          }}>
          Delete
        </button>
      </Modal>
    </>
  );
}

export default App;
