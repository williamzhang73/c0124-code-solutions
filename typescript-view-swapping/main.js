'use strict';
const $TabContainer = document.querySelector('.tab-container');
const $TabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');
if (!$TabContainer || !$TabElements || !$viewElements) {
  throw new Error('query failed');
}
/* console.log('$TabElements: ', $TabElements); */
$TabContainer.addEventListener('click', (event) => {
  /*   console.log('event target: ', event.target); */
  const $eventTarget = event.target;
  for (const $tabElement of $TabElements) {
    /*     console.log('$tabElement: ', $tabElement); */
    if ($tabElement === $eventTarget) {
      $tabElement.classList.toggle('active');
    } else {
      $tabElement.classList.remove('active');
    }
  }
  const currentDataView = $eventTarget.getAttribute('data-view');
  console.log('dataView: ', currentDataView);
  for (const $view of $viewElements) {
    if ($view.getAttribute('data-view') === currentDataView) {
      $view.classList.toggle('hidden');
    } else {
      $view.classList.add('hidden');
    }
  }
});
