'use strict';
const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$openModal || !$dismissModal || !$dialog) {
  throw new Error('query failed');
}
$openModal.addEventListener('click', () => {
  $dialog.showModal();
});
$dismissModal.addEventListener('click', () => {
  $dialog.close();
});
