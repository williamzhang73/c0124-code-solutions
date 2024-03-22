import './App.css';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { RegistrationFormControlled } from './RegistrationFormControlled';
function App() {
  return (
    <>
      <label>
        Uncontrolled:
        <RegistrationFormUncontrolled />
      </label>
      <label>
        controlled:
        <RegistrationFormControlled />
      </label>
    </>
  );
}

export default App;
