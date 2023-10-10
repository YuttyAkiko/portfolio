// Seção onde vão ficar os cards
let sectionSkills = document.querySelector('.cards-container-skills');
let sectionTools = document.querySelector('.slider');

// Endereço do arquivo JSON
const url = 'cards.json';

// Desenhando o card de HABILIDADES
function drawCardSkills(item) {
  // Card
  let card = document.createElement('article');
  card.setAttribute('class', 'card');
  sectionSkills.appendChild(card);

  // Imagem do card
  let image = document.createElement('img');
  card.appendChild(image);
  image.setAttribute('src', item.image); // Define a origem da imagem
  image.setAttribute('class', 'emoji-smile');

  // Texto do card
  let text = document.createElement('p');
  card.appendChild(text);
  text.textContent = item.text; // Define o texto do parágrafo
  text.setAttribute('class', 'txt font-4 fw-300');
}

// Desenhando o card de FERRAMENTAS
function drawCardTools(item) {
  // Card
  let card = document.createElement('article');
  card.setAttribute('class', 'card item');
  sectionTools.appendChild(card);

  // Imagem do card
  let image = document.createElement('img');
  card.appendChild(image);
  image.setAttribute('src', item.image); // Define a origem da imagem
  image.setAttribute('class', 'emoji-smile img-dev');

  // Texto do card
  let text = document.createElement('p');
  card.appendChild(text);
  text.textContent = item.text; // Define o texto do parágrafo
  text.setAttribute('class', 'txt font-4 fw-600');

  // Span do card
  let status = document.createElement('span');
  card.appendChild(status);
  status.textContent = item.status;
  status.setAttribute('class', 'txt font-4 status');
}

// Pegando dados e criando os cards
function createCards() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data || !Array.isArray(data.skills, data.tools)) {
        console.log('Formato inválido!')
        return
      } else {
        // Iterar com os dados do JSON e criar os cartões
        data.skills.forEach(item => {
        drawCardSkills(item);
      })
        data.tools.forEach(item => {
        drawCardTools(item);
      })
      }
    })
    .catch(error => {
      console.error('Erro ao buscar o JSON:', error);
    })
}

// Iniciar a criação dos cards
createCards();