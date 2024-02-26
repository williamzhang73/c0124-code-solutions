const $message = document.querySelector('.message') as HTMLHeadingElement;
if (!$message) {
  throw new Error('$message query failed');
}
setTimeout(() => {
  $message.textContent = 'HELLO THERE';
}, 2000);
