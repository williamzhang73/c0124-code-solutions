import { useRef } from 'react';
import './App.css';
import { Modal } from './Modal';

function App() {
  const modal = useRef<HTMLDialogElement>(null);
  function handleButtonClick() {
    modal.current?.showModal();
  }
  function handleDialogCancel() {
    modal.current?.close();
  }
  function handleDialogDelete() {
    alert('deleted');
    modal.current?.close();
  }
  return (
    <>
      <button onClick={handleButtonClick}>Delete me!</button>
      <Modal>
        <p>Really want to delete?</p>
        <button onClick={handleDialogCancel}>Cancel</button>
        <button onClick={handleDialogDelete}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
