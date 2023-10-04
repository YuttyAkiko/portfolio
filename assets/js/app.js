// Buscando os links do menu de navegação
const menuItems = document.querySelectorAll('.menu a[href^="#"]');

// Colocando o evento de click e chamando a função para cada link do menu
menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href'); // Busca o href do link
  const position = document.querySelector(id).offsetTop; // Retorna a posição que o elemento está do topo
  return position
}

function scrollToIdOnClick(event) {
  event.preventDefault(); // Previnindo ações padrões
  const section = getScrollTopByHref(event.currentTarget) - 90; // Busca o alvo clicado e atribui na função
  scrollToPosition(section);
}

function scrollToPosition(section) {
  smoothScrollTo(0, section);
  /* window.scroll({
    // Para onde quero dar o scrool
    top: section,
    behavior: 'smooth',
  }); */
}

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/* 
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
// Peguei as funções abaixo prontas no GitHub do Origmid
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};
