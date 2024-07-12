// Seção onde vão ficar os cards
let containerSkills = document.querySelector('.container-cards-skills');
let containerTools = document.querySelector('.slider');
let containerProjects = document.querySelector('.container-cards-projects');
let containerBadges = document.querySelector('.container-cards-badges');

// Endereço do arquivo JSON
const url = 'cards.json';

// Desenhando o card de HABILIDADES
function drawCardSkills(item) {
  // Card
  let card = document.createElement('article');
  card.setAttribute('class', 'card card-skill border-green');
  containerSkills.appendChild(card);

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
  card.setAttribute('class', 'card card-tool border-cyan');
  containerTools.appendChild(card);

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

//Desenha o card de PROJETOS
function drawCardProjects(item) {
  // Card
  let card = document.createElement('article');
  card.setAttribute('class', 'card card-project border-fuchsia');
  containerProjects.appendChild(card);

  let div1 = document.createElement('div');
  card.appendChild(div1);

  let div2 = document.createElement('div');
  card.appendChild(div2);

  // Título do projeto
  let title = document.createElement('p');
  div1.appendChild(title);
  title.textContent = item.title; // Define o título
  title.setAttribute('class', 'txt font-5 fw-600');

  // Preview do projeto
  let image = document.createElement('img');
  div1.appendChild(image);
  image.setAttribute('src', item.image); // Define a origem da imagem no json
  image.setAttribute('class', 'img-project');

  // Descrição do projeto
  let text = document.createElement('p');
  div2.appendChild(text);
  text.textContent = item.description;
  text.setAttribute('class', 'txt font-4 fw-300');

  // Link do projeto
  let button = document.createElement('button');
  div2.appendChild(button);
  button.textContent = item.button;
  button.setAttribute('class', 'btn-green btn-projects font-5 fw-600');
  button.addEventListener('click', () => {
    window.open(item.link, '_blank');
  })

  // Span do card
  let status = document.createElement('span');
  div2.appendChild(status);
  status.textContent = item.status;
  status.setAttribute('class', 'txt font-4 status');

  if (item.status) {
    image.style.display = 'none';
    button.style.display = 'none';
  } else {
    status.style.display = 'none';
  }
}

// Desenhando o card de CERTIFICAÇÕES
function drawCardBadges(item) {
  // Card
  let card = document.createElement('div');
  containerBadges.appendChild(card);
  card.setAttribute('class', 'card-badge')

  // Imagem do card
  let div = document.createElement('div');
  card.appendChild(div);
  div.setAttribute('class', 'badge');

  // Link do card
  let button = document.createElement('button');
  div.appendChild(button);
  button.setAttribute('href', item.badge);
  button.setAttribute('class', 'badge-btn');
  button.addEventListener('click', () => {
    window.open(item.badge, '_blank');
  })

  // Imagem do card
  let image = document.createElement('img');
  button.appendChild(image);
  image.setAttribute('src', item.image);
  image.setAttribute('class', 'badge-img');

  // Texto do card
  let text = document.createElement('span');
  card.appendChild(text);
  text.textContent = item.description;
  text.setAttribute('class', 'font-4');
}

// Pegando dados e criando os cards a partir de uma arquivo json
function createCards() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data || !Array.isArray(data.skills, data.tools, data.projects, data.badges)) {
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
        data.projects.forEach(item => {
          drawCardProjects(item);
        })
        data.badges.forEach(item => {
          drawCardBadges(item);
        })
      }
    })
    .catch(error => {
      console.error('Erro ao buscar o JSON:', error);
    })
}

// Iniciar a criação dos cards
createCards();