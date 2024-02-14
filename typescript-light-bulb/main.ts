const $cycle = document.querySelector('.cycle');
const $body = document.body;
if (!$cycle || !$body) {
  throw new Error('query failed');
}

$cycle.addEventListener('click', () => {
  console.log('event fired');
  $body.classList.toggle('bodyNight');
  /*   console.log('bodyClassList: ', $body.classList); */
  $cycle.classList.toggle('cycleNight');
  /*   console.log('cycleClassList: ', $cycle.classList); */
});
