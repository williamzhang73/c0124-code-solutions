interface formElement extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}
interface messageDate {
  name: string;
  email: string;
  message: string;
}
const $contactForm = document.getElementById('contact-form') as HTMLFormElement;
if (!$contactForm) {
  throw new Error('the query failed');
}
$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements as formElement;
  const messageDate: messageDate = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('messageData: ', messageDate);
});
