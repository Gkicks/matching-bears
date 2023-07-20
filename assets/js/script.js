const cardArea = document.getElementById('game-container');
const cardInfo = [
    { name: 'bearOne', image: 'assets/images/bear-one.webp' },
    { name: 'bearOne', image: 'assets/images/bear-one.webp' },
    { name: 'bearTwo', image: 'assets/images/bear-two.webp' },
    { name: 'bearTwo', image: 'assets/images/bear-two.webp' },
    { name: 'bearThree', image: 'assets/images/bear-three.webp' },
    { name: 'bearThree', image: 'assets/images/bear-three.webp' },
    { name: 'bearFour', image: 'assets/images/bear-four.webp' },
    { name: 'bearFour', image: 'assets/images/bear-four.webp' },
];
// learned from website https://www.slingacademy.com/article/ways-to-shuffle-an-array-in-javascript/#:~:text=3%20Using%20Lodash-,Using%20Sort()%20Function,sort(()%20%3D%3E%20Math.
const shuffledCards = cardInfo.sort(() => Math.random() - 0.5);

/** This function generates cards into the game-container section */
function generateCards() {
    for (i = 0; i < shuffledCards.length; i++) {
        // learnt from https://stackoverflow.com/questions/5886144/create-divs-from-array-elements
        const cards = document.createElement('div');
        // https://stackoverflow.com/questions/1988514/javascript-css-how-to-add-and-remove-multiple-css-classes-to-an-element
        cards.classList.add('card');
        cards.textContent = '?';
        cards.setAttribute('name', shuffledCards[i].name);
        document.getElementById('game-container').appendChild(cards);
    }
}
generateCards();

function generateCardsFront() {
    const cards = document.getElementsByClassName('card');
    for (i = 0; i < cards.length; i++) {
        const fronts = document.createElement('img');
        fronts.setAttribute('src', shuffledCards[i].image);
        fronts.classList.add('cardFront');
        document.getElementsByClassName('card')[i].appendChild(fronts);
    }
}
generateCardsFront();

function turnCard() {
    const card = document.getElementsByClassName('cardFront');
    console.log(card);
    card.style.visibility = visible;
    card.addEventListener('click', turnCard());
}

turnCard();





