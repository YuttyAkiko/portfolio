window.onload = function () {

	setTimeout(() => {
		const prevBtn = document.getElementById("prevBtn");
		const nextBtn = document.getElementById("nextBtn");
		const autoPlayBtn = document.querySelector(".btnAuto");
		const slider = document.querySelector(".slider");
		const cards = document.querySelectorAll(".card-tool");


		//configuração padrão para inicializar variavel.
		var refreshIntervalId = setInterval(nextSlide, 999999);

		// configuração padrão para inicializar a posição do card inicial.
		let currentIndex = 0;

		// por padrão o autoplay dos cards vem desabilitado.
		let autoPlayStatus = false;

		// Função responsavel pelo funcionamento automatico.
		function autoplay() {
			switch (autoPlayStatus) {
				case false:
					autoPlayStatus = true;
					autoPlayBtn.style.color = "#00ff00";
					refreshIntervalId = setInterval(nextSlide, 1000);
					autoPlayBtn.innerHTML =
						'<span class="material-symbols-outlined">toggle_off</span>';
					break;
				case true:
					autoPlayStatus = false;
					autoPlayBtn.style.color = "#ff0000";
					clearInterval(refreshIntervalId);
					autoPlayBtn.innerHTML =
						'<span class="material-symbols-outlined">toggle_on</span>';
					break;
			}
		}

		// Função para avançar um card.
		function prevSlide() {
			currentIndex = Math.max(currentIndex - 1, -1);
			updateSliderPosition("prev");
		}

		// Função para retornar um card.
		function nextSlide() {
			currentIndex = Math.min(currentIndex + 1, cards.length);
			updateSliderPosition("next");
		}

		// logica aplicada para funcionamento dos cards baseado no tamanho e quantidade de cards existentes dentro do slider.
		function updateSliderPosition(dir) {
			const totalIndex = cards.length;
			const cardWidth = cards[0].clientWidth + 50;
			let offset = -currentIndex * cardWidth;
			slider.style.transform = `translateX(${offset}px)`;
			if (currentIndex === totalIndex) {
				currentIndex = 0;
				slider.style.transform = `translateX(0px)`;
			}
			if (currentIndex < 0) {
				currentIndex = totalIndex - 1;
				let totaloffset = -totalIndex * cardWidth + 250;
				slider.style.transform = `translateX(${totaloffset}px)`;
			}
		}

		// configuração dos botões visuais na pagina.
		prevBtn.addEventListener("click", prevSlide);
		nextBtn.addEventListener("click", nextSlide);

		updateSliderPosition("");

	}, 200);

};