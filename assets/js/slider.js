window.onload = function () {

	setTimeout(() => {
		const prevBtn = document.getElementById('prev-btn');
		const nextBtn = document.getElementById('next-btn');
		const slider = document.querySelector('.slider');
		const cards = document.querySelectorAll('.card-tool');


		//Configuração padrão para inicializar variavel.
		var refreshIntervalId;

		// Configuração padrão para inicializar a posição do card inicial.
		let currentIndex = 0;

		// Por padrão o autoplay dos cards vem desabilitado.
		let autoPlayStatus = false;

		// Função para iniciar o autoplay
		function autoPlay() {
			if (autoPlayStatus) {
				refreshIntervalId = setInterval(nextSlide, 2000); // 2 segundos
				slider.addEventListener('mouseenter', pauseAutoPlay);
				slider.addEventListener('mouseleave', resumeAutoPlay);
			} else {
				clearInterval(refreshIntervalId);
			}
		}

		// Função para parar o autoplay quando o mouse entra no slider, botões "prev" e "next"
		function pauseAutoPlay() {
			autoPlayStatus = false;
			autoPlay();
		}

		// Função para retomar o autoplay quando o mouse sai do slider, botões "prev" e "next"
		function resumeAutoPlay() {
			autoPlayStatus = true;
			autoPlay();
		}

		// Função para avançar um card.
		function prevSlide() {
			currentIndex = Math.max(currentIndex - 1, -1);
			updateSliderPosition('prev');
		}

		// Função para retornar um card.
		function nextSlide() {
			currentIndex = Math.min(currentIndex + 1, cards.length);
			updateSliderPosition('next');
		}

		// Lógica aplicada para funcionamento dos cards baseado no tamanho e quantidade de cards existentes dentro do slider.
		function updateSliderPosition(dir) {
			const totalIndex = cards.length;
			const cardWidth = cards[0].clientWidth + 34;
			let offset = -currentIndex * cardWidth;
			slider.style.transform = `translateX(${offset}px)`;
			if (currentIndex === totalIndex) {
				currentIndex = 0;
				slider.style.transform = `translateX(0px)`;
			}
			if (currentIndex < 0) {
				currentIndex = totalIndex - 1;
				let totaloffset = -totalIndex * cardWidth + 210;
				slider.style.transform = `translateX(${totaloffset}px)`;
			}
		}

		// Configuração dos botões 'prev' e 'next' do slider
		prevBtn.addEventListener('click', prevSlide);
		nextBtn.addEventListener('click', nextSlide);

		// Adicionar evento para pausar o autoplay quando o mouse entra nos botões "prev" e "next"
		prevBtn.addEventListener('mouseenter', pauseAutoPlay);
		nextBtn.addEventListener('mouseenter', pauseAutoPlay);

		// Adicionar evento para retomar o autoplay quando o mouse sai dos botões "prev" e "next"
		prevBtn.addEventListener('mouseleave', resumeAutoPlay);
		nextBtn.addEventListener('mouseleave', resumeAutoPlay);

		autoPlay(); // Inicie o autoplay quando a página carregar
		updateSliderPosition("");

	}, 200);
	
};