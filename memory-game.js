const gameContainer = document.querySelector('.game-container');
const nextPageButton = document.getElementById('nextPage');

// Esconde o botão ao carregar a página
nextPageButton.style.display = 'none';

const emojis = ['💌', '❤️']; // Apenas 2 pares de emojis
let cards = [...emojis, ...emojis];
let flippedCards = [];
let matchedCards = 0;

// Embaralhar as cartas
cards.sort(() => Math.random() - 0.5);

// Criar as cartas no tabuleiro
cards.forEach((emoji) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.emoji = emoji;
    card.innerHTML = "?"; // Inicialmente, mostra um ponto de interrogação
    
    card.addEventListener('click', flipCard);
    gameContainer.appendChild(card);
});

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.innerHTML = this.dataset.emoji;
        this.classList.add('flipped');
        flippedCards.push(this);
    }
    
    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 800);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.dataset.emoji === card2.dataset.emoji) {
        matchedCards += 2;
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
    } else {
        card1.innerHTML = "?";
        card2.innerHTML = "?";
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    
    flippedCards = [];

    // Verifica se todas as cartas foram combinadas
    console.log(`Cartas combinadas: ${matchedCards}/${cards.length}`);
    if (matchedCards === cards.length) {
        console.log("Jogo finalizado! Exibindo botão...");
        nextPageButton.style.display = 'block';
    }
}
