const tabConatainer = document.querySelector('.tab-container');
const tabList = document.querySelectorAll('.tab');
const viewList = document.querySelectorAll('.view');

tabConatainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < tabList.length; i++) {
      if (tabList[i] === event.target) {
        event.target.className = 'tab active';
      } else {
        tabList[i].className = 'tab';
      }
    }
    const dataView = event.target.getAttribute('data-view');
    for (let i = 0; i < viewList.length; i++) {
      if (viewList[i].getAttribute('data-view') === dataView) {
        viewList[i].className = 'data-view';
      } else {
        viewList[i].className = 'data-view hidden';
      }
    }
  }
});
