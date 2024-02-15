'use strict';
const $contactForm = document.getElementById('contact-form');
if (!$contactForm) {
  throw new Error('the query failed');
}
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const messageDate = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('messageData: ', messageDate);
});
