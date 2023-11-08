const $task = document.querySelector('.task-list');

$task.addEventListener('click', function (event) {
  console.log('event target:', event.target);
  console.log('event target tagname:', event.target.tagName);
  if (event.target && event.target.matches('button')) {
    const closest = event.target.closest('.task-list-item');
    console.log('closest task list item', closest);
    closest.remove();
  }
});
