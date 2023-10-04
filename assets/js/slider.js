const buttons = document.querySelectorAll('.btn-slider'); // Selecionando os botões
const items = document.querySelectorAll('.card'); // Selecionando cada card
const maxItems = items.length; // Quantidade de cards

let currentItem = 0; // Inicializador

// Função que atualiza o slide
function updateSlide(isLeft) {
  if(isLeft) {
    // Percorrendo os cards conforme o click
    currentItem -= 1;
  } else {
    currentItem += 1;
  }
  
  if(currentItem >= maxItems) {
    // Volta para o primeiro card
    currentItem = 0;
  }

  if(currentItem < 0) {
    // Para voltar do primeiro para o último, vice e versa
    currentItem = maxItems - 1;
  }

  items[currentItem].scrollIntoView({
    // Rolagem suave para o card
    behavior: "smooth",
    inline: "center"
  });
  
  console.log('Cliquei no botão esquerdo', isLeft, maxItems, currentItem);
}

buttons.forEach(button => { 
  // Adicionando evento para o botão
  button.addEventListener('click', (event) => {
    const isLeft = event.target.classList.contains('prev');
    updateSlide(isLeft)
  });
});