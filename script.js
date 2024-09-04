// script.js
document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const imageToUpload = queryParams.get('img') || 'imagem1.jpeg'; // Obter a imagem selecionada da URL
    
    // Atualiza a imagem original com base nos parâmetros da URL
    const originalImageElement = document.getElementById('originalImage');
    if (originalImageElement) {
        originalImageElement.src = imageToUpload;
    }

    document.getElementById('translateButton').addEventListener('click', function() {
        const translationWrapper = document.getElementById('translation-wrapper');
        const iconContainer = document.getElementById('icon-container');

        // Limpa o conteúdo existente
        translationWrapper.innerHTML = '';
        iconContainer.innerHTML = '';

        // Cria e adiciona o loader
        const loader = document.createElement('div');
        loader.classList.add('loader');

        const loaderText = document.createElement('span');
        loaderText.classList.add('loader-text');
        loaderText.textContent = 'Traduzindo';

        const load = document.createElement('span');
        load.classList.add('load');

        loader.appendChild(loaderText);
        loader.appendChild(load);

        translationWrapper.appendChild(loader);

        // Mostra o loader por 3 segundos e depois exibe a imagem traduzida
        setTimeout(() => {
            // Limpa o loader
            translationWrapper.innerHTML = '';

            // Cria e adiciona o card com a imagem traduzida
            const card = document.createElement('div');
            card.classList.add('card');

            const cardInfo = document.createElement('div');
            cardInfo.classList.add('card-info');

            const image = document.createElement('img');
            const imageMap = {
                'imagem1.jpeg': 'traducao1.jpeg',
                'imagem2.jpeg': 'traducao2.jpeg',
                'imagem3.jpeg': 'traducao3.jpeg',
                'imagem4.jpeg': 'traducao4.jpeg'
            };
            const imageFile = imageMap[imageToUpload.split('/').pop()] || 'traducao1.jpg'; // Garante que apenas o nome do arquivo seja considerado
            image.src = imageFile;
            image.alt = 'Imagem Traduzida';
            image.classList.add('image');

            cardInfo.appendChild(image);
            card.appendChild(cardInfo);

            const caption = document.createElement('p');
            caption.textContent = 'Tradução';

            translationWrapper.appendChild(card);
            translationWrapper.appendChild(caption);

            // Adiciona o ícone de seta
            const arrowIcon = document.createElement('div');
            arrowIcon.classList.add('icon-container');
            arrowIcon.innerHTML = `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="arrow-icon"
                >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
            `;
            iconContainer.appendChild(arrowIcon);
            iconContainer.style.display = 'block';

        }, 3000);
    });
});
