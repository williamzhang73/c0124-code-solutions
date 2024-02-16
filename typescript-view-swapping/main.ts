const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

if (!$tabContainer || !$tabElements || !$viewElements) {
  throw new Error('query failed');
}
/* console.log('$TabElements: ', $TabElements); */
$tabContainer.addEventListener('click', (event: Event) => {
  /*   console.log('event target: ', event.target); */
  const $eventTarget = event.target as HTMLDivElement;
  for (const $tabElement of $tabElements) {
    /*     console.log('$tabElement: ', $tabElement); */
    if ($tabElement === $eventTarget) {
      $tabElement.classList.toggle('active');
    } else {
      $tabElement.classList.remove('active');
    }
  }

  const currentDataView = $eventTarget.getAttribute('data-view');
  console.log('dataset.view: ', $eventTarget.dataset.view);

  /*   console.log('dataView: ', currentDataView); */
  for (const $view of $viewElements) {
    if ($view.getAttribute('data-view') === currentDataView) {
      $view.classList.toggle('hidden');
    } else {
      $view.classList.add('hidden');
    }
  }
});
