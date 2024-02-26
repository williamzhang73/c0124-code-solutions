const $countDown = document.querySelector(
  '.countdown-display'
) as HTMLHeadingElement;
if (!$countDown) {
  throw new Error('$countDown query failed');
}
const intervalId = setInterval(() => {
  let count = Number($countDown.textContent);
  count--;

  if (count === 0) {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  } else {
    $countDown.textContent = count.toString();
  }
}, 1000);
