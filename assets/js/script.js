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
const cards = document.getElementsByClassName('card');
const flippedCards = document.getElementsByClassName('flipCard');
const timeCount = document.getElementById('time');
let time = 0;
timeCount.textContent = time;
const flipCount = document.getElementById('flips');
let flips = 0;
flipCount.textContent = flips;

// To prepare the game when the DOM has loaded
addEventListener('DOMContentLoaded', generateCards());

/** This function generates cards into the game-container section */
function generateCards() {
    // learned from website https://www.slingacademy.com/article/ways-to-shuffle-an-array-in-javascript/#:~:text=3%20Using%20Lodash-,Using%20Sort()%20Function,sort(()%20%3D%3E%20Math.
    // randomise the array  
    cardInfo.sort(() => Math.random() - 0.5);
    // create the HTML
    for (i = 0; i < cardInfo.length; i++) {
        // learnt from https://stackoverflow.com/questions/5886144/create-divs-from-array-elements
        const cards = document.createElement('div');
        // https://stackoverflow.com/questions/1988514/javascript-css-how-to-add-and-remove-multiple-css-classes-to-an-element
        cards.classList.add('card');
        cards.setAttribute('name', cardInfo[i].name);
        // cards.textContent = '?';
        cardArea.appendChild(cards);

        const cardFront = document.createElement('img');
        cardFront.classList.add('cardFront');
        cardFront.setAttribute('src', cardInfo[i].image);
        cardFront.setAttribute('alt', 'image of a bear');
        cards.appendChild(cardFront);

        const cardBack = document.createElement('div');
        cardBack.textContent = '?';
        cardBack.classList.add('cardBack');
        cards.appendChild(cardBack);

        // https://www.w3schools.com/howto/howto_js_toggle_class.asp
        cards.addEventListener('click', function turnCard() {
            cards.classList.toggle('toggleCard');
        });

    }
}

/**
 * This function checks if the two cards clicked match
 */
function checkMatch() {

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {

            console.log("It's a match!");

            for (let card of flippedCards) {
                card.style.pointerEvents = 'none';
            }

            flippedCards[0].classList.remove('flipCard');
            flippedCards[0].classList.remove('flipCard');

            flipCount.textContent = flips + 2;
            flips = parseInt(flipCount.textContent);



        } else {

            console.log("Not a match!");

            // https://stackoverflow.com/questions/69300285/how-to-remove-a-class-with-delay-after-a-button-is-pressed
            for (let card of flippedCards) {
                setTimeout(function () {
                    card.classList.remove('toggleCard');
                }, 1500);
            }

            flippedCards[0].classList.remove('flipCard');
            flippedCards[0].classList.remove('flipCard');

            flipCount.textContent = flips + 2;
            flips = parseInt(flipCount.textContent);

        };
    };
}

// https://linuxhint.com/add-class-to-clicked-element-using-javascript/
document.addEventListener('click', function flipCard(event) {
    event.target.classList.add('flipCard');
    checkMatch();
});

// JavaScript & the DOM  Getting Set Up  The < script > Element;
setInterval(function () {
    let currentTime = timeCount.innerHTML;
    currentTime++;
    timeCount.innerHTML = currentTime;
}, 1000);