const $taskList = document.querySelector('.container> .task-list');
if (!$taskList) {
  throw new Error('the $taskList query failed');
}
$taskList.addEventListener('click', (event) => {
  const eventTarget = event.target as HTMLElement;
  const tagName = eventTarget.tagName;
  console.log('event.target: ', eventTarget);
  console.log('event.target.tagName: ', tagName);
  if (tagName === 'BUTTON') {
    const li = eventTarget.closest('.task-list-item');
    console.log('closest .task-list-item: ', li);
    li?.remove();
  }
});
