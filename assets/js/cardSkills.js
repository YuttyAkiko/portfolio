// Seção onde vão ficar os cards
let sectionSkills = document.querySelector('.cards-container')

// Endereço do arquivo json
const url = 'cards.json'

// Desenhando o card
function drawCard(skill) {
  // Card
  let card = document.createElement('article')
  card.setAttribute('class', 'card')
  sectionSkills.appendChild(card)

  // Imagem do card
  let image = document.createElement('img')
  card.appendChild(image)
  image.setAttribute('src', skill.image) // Define a origem da imagem
  image.setAttribute('class', 'emoji-smile')

  // Texto do card
  let text = document.createElement('p')
  card.appendChild(text)
  text.textContent = skill.text; // Define o texto do parágrafo
  text.setAttribute('class', 'txt font-4')
}

// Pegando dados e criando os cards
function createCards() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data || !Array.isArray(data.skills)) {
        console.log('Erro ao acessar o JSON ou formato inválido')
        return
      }
      // Iterar com os dados do JSON e criar os cartões
      data.skills.forEach(skill => {
        drawCard(skill);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar o JSON:', error);
    });
}

// Iniciar a criação dos cards
createCards()