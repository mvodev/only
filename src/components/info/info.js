const openInfo = (event) => {
  let description;
  let plus;
  let minus;
  let root;
  if (event.target.classList.contains('info') || event.target.parentNode.classList.contains('info')) {
    if (event.target.classList.contains('info')) {
      root = event.target;
    } else {
      root = event.target.parentNode;
    }
    [, plus, minus, description] = root.childNodes;
    if (description.classList.contains('info_invisible')) {
      description.classList.remove('info_invisible');
      minus.classList.remove('info_invisible');
      plus.classList.add('info_invisible');
    } else {
      description.classList.add('info_invisible');
      plus.classList.remove('info_invisible');
      minus.classList.add('info_invisible');
    }
  }
};

document.addEventListener('pointerdown', (event) => openInfo(event));
