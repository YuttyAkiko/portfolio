function hideMenu(x) {
  let menu = document.getElementById('hide-menu');

  x.classList.toggle('change');

  if (menu.style.display == 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}