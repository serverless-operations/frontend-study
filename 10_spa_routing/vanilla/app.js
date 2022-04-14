const components = {
  '/': '<div><h1>ここはホームページ</h1></div>',
  '/about': '<div><h1>ここはAbout</h1></div>',
  '/contact': '<div><h1>ここはコンタクト</h1></div>',
  404: '<div><h1>NOT FOUND</h1></div>',
};

document.addEventListener('DOMContentLoaded', () => {
  const $anchors = document.querySelectorAll('#nav a');
  for (const $anchor of $anchors) {
    $anchor.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState({}, '', e.target.href);
      handleLocation();
    });
  }

  handleLocation();
});

const handleLocation = async () => {
  const path = window.location.pathname;
  const component = components[path] || components[404];
  const $mainView = document.querySelector('#main-view');
  $mainView.innerHTML = component;
};

window.onpopstate = handleLocation;
