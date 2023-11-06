// Seção onde vão ficar os cards
let containerSkills = document.querySelector('.container-cards-skills');
let containerTools = document.querySelector('.slider');
let containerProjects = document.querySelector('.container-cards-projects');

// Endereço do arquivo JSON
const url = 'cards.json';

// Desenhando o card de HABILIDADES
function drawCardSkills(item) {
  // Card
  let card = document.createElement('article');
  card.setAttribute('class', 'card card-skill');
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
  card.setAttribute('class', 'card card-tool');
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
  card.setAttribute('class', 'card card-skill');
  containerProjects.appendChild(card);

  // Título do projeto
  let title = document.createElement('p');
  card.appendChild(title);
  title.textContent = item.title; // Define o título
  title.setAttribute('class', 'txt font-5 fw-600');

  // Preview do projeto
  let image = document.createElement('img');
  card.appendChild(image);
  image.setAttribute('src', item.image); // Define a origem da imagem
  image.setAttribute('class', 'card-projects');

  // Descrição do projeto
  let text = document.createElement('p');
  card.appendChild(text);
  text.textContent = item.description; // Define o texto do parágrafo
  text.setAttribute('class', 'txt font-4 fw-300');
  
  // Link do projeto
  let button = document.createElement('button');
  card.appendChild(button);
  button.textContent = item.button; // Define o texto do parágrafo
  button.setAttribute('id', 'contact');
  button.setAttribute('class', 'btn-projects font-5 fw-600');
  button.addEventListener('click', () => {
    window.open(item.link, '_blank');
  })
}

// Pegando dados e criando os cards
function createCards() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data || !Array.isArray(data.skills, data.tools, data.projects)) {
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
      }
    })
    .catch(error => {
      console.error('Erro ao buscar o JSON:', error);
    })
}

// Iniciar a criação dos cards
createCards();