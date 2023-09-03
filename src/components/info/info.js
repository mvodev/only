const handleInfoClick = (root) => {
  const [, plus, minus, description] = root.childNodes;
  if (description.classList.contains('info_invisible')) {
    description.classList.remove('info_invisible');
    minus.classList.remove('info_invisible');
    plus.classList.add('info_invisible');
  } else {
    description.classList.add('info_invisible');
    plus.classList.remove('info_invisible');
    minus.classList.add('info_invisible');
  }
};

const closeInfo = (root) => {
  const [, plus, minus, description] = root.childNodes;
  description.classList.add('info_invisible');
  plus.classList.remove('info_invisible');
  minus.classList.add('info_invisible');
};

const handleInfo = (event) => {
  let infoRootElem;
  if (event.target.classList.contains('info') || event.target.parentNode.classList.contains('info')) {
    if (event.target.classList.contains('info')) {
      infoRootElem = event.target;
    } else {
      infoRootElem = event.target.parentNode;
    }
    handleInfoClick(infoRootElem);
  } else {
    document.querySelectorAll('.info').forEach((infoRoot) => closeInfo(infoRoot));
  }
};

document.addEventListener('pointerdown', (event) => handleInfo(event));
