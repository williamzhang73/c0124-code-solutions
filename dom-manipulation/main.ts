const $buttonClick = document.querySelector('button');
const $clickCount = document.querySelector('.click-count');
console.log($clickCount);
console.log('textContent: ', $clickCount?.textContent);
if (!$buttonClick) {
  throw new Error('the $buttonClick query failed');
} else if (!$clickCount) {
  throw new Error('the $clickCount query failed');
}
let clickCount = 0;
$buttonClick?.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 4) {
    $buttonClick.classList.remove('cold');
    $buttonClick.classList.add('warm');
  } else if (clickCount === 8) {
    $buttonClick.classList.remove('warm');
    $buttonClick.classList.add('hot');
  } else if (clickCount === 12) {
    $buttonClick.classList.remove('hot');
    $buttonClick.classList.add('nuclear');
  } else if (clickCount === 16) {
    $buttonClick.classList.remove('nuclear');
    $buttonClick.classList.add('tepid');
  }

  $clickCount.textContent = `Clicks: ${clickCount}`;
});
