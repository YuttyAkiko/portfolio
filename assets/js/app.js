// Buscando os links do menu de navegação
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href'); // Busca o href do link
  return document.querySelector(id).offsetTop; // Retorna a posição que o elemento está do topo
}

function scrollToIdOnClick(event) {
  event.preventDefault(); // Previnindo ações padrões
  const section = getScrollTopByHref(event.target) - 90; // Busca o alvo clicado e atribui na função

  scrollToPosition(section);
}

function scrollToPosition(section) {
  window.scroll({
    // Para onde quero dar o scrool
    top: section,
    behavior: 'smooth',
  }); 
}
