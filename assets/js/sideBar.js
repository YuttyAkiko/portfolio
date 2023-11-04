function hideMenu(x) {
  let menu = document.querySelector('.menu');

  x.classList.toggle('change'); // Alterna a classe 'change' no botão para efeito visual

  if (menu.classList.contains('hide-menu')) { // Verifica se o elemento do menu contém a classe 'hide-menu'
    menu.classList.remove('hide-menu'); // Remove a classe 'hide-menu' para mostrar o menu
  } else {
    menu.classList.add('hide-menu'); // Adiciona a classe 'hide-menu' para ocultar o menu
  }
}
