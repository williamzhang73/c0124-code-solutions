function handleFocus(event: Event): void {
  console.log('focus event was fired');
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name: ', $eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('blur event was fired');
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('$eventTarget.name: ', $eventTarget.name);
}

function handleInput(event: Event): void {
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('$eventTarget.name: ', $eventTarget.name);
  console.log('$eventTarget.value: ', $eventTarget.value);
}

const $userName = document.getElementById('user-name');
const $userEmail = document.getElementById('user-email');
const $userMessage = document.getElementById('user-message');
if (!$userName || !$userEmail || !$userMessage) {
  throw new Error('query failed');
}

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
