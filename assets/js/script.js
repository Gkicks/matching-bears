// global variables
const cards = document.getElementsByClassName('card');
const flippedCards = document.getElementsByClassName('flipCard');
const cardFronts = document.getElementsByClassName('cardFront');
// an array for the cards to go in when matched
const matchedCards = [];


// to display the how to play instructions with the 'how to play' area is clicked 
// https://stackoverflow.com/questions/55147410/html-javascript-button-click-again-to-undo
const howToPlay = document.querySelector('#how-to-play');
const howToPlayTitle = document.querySelector('#how-to-play-title');
const instructions = document.querySelector('#instructions-div');
let state = 0;
howToPlayTitle.addEventListener('click', function () {
    if (state == 0) {
        instructions.classList.add('instructions-visable');
        instructions.classList.remove('instructions-hidden');
        howToPlay.style.height = '45vh';
        state = 1;
        // to remove the how to play instructions when the how to play area is clicked again
    } else {
        instructions.classList.remove('instructions-visable');
        instructions.classList.add('instructions-hidden');
        howToPlay.style.height = '10vh';
        state = 0;
    }
});

// to move from the start screen to the main screen
const StartGameButton = document.getElementById('start-button');
const startGame = document.querySelector('#start-game-div-id');
const input = document.querySelector('#enter-name');
// hides the start-game-div by removing the id and putting in a hide-div class
StartGameButton.addEventListener('click', function mainPage(event) {
    if (input.value.length > 0) {
        startGame.removeAttribute('id');
        startGame.classList.add('hide-div');
        event.preventDefault();
    };
});

/** This function generates cards into the game-container section */
function generateCards() {
    const cardArea = document.getElementById('game-container');
    const cardInfo = [
        { name: 'bearOne', image: 'assets/images/bear-one.webp' },
        { name: 'bearOne', image: 'assets/images/bear-one.webp' },
        { name: 'bearTwo', image: 'assets/images/bear-two.webp' },
        { name: 'bearTwo', image: 'assets/images/bear-two.webp' },
        { name: 'bearThree', image: 'assets/images/bear-three.webp' },
        { name: 'bearThree', image: 'assets/images/bear-three.webp' },
        // { name: 'bearFour', image: 'assets/images/bear-four.webp' },
        // { name: 'bearFour', image: 'assets/images/bear-four.webp' },
        // { name: 'bearFive', image: 'assets/images/bear-five.webp' },
        // { name: 'bearFive', image: 'assets/images/bear-five.webp' },
        // { name: 'bearSix', image: 'assets/images/bear-six.webp' },
        // { name: 'bearSix', image: 'assets/images/bear-six.webp' },
        // { name: 'bearSeven', image: 'assets/images/bear-seven.webp' },
        // { name: 'bearSeven', image: 'assets/images/bear-seven.webp' },
        // { name: 'bearEight', image: 'assets/images/bear-eight.webp' },
        // { name: 'bearEight', image: 'assets/images/bear-eight.webp' },
    ];
    // learned from website https://www.slingacademy.com/article/ways-to-shuffle-an-array-in-javascript/#:~:text=3%20Using%20Lodash-,Using%20Sort()%20Function,sort(()%20%3D%3E%20Math.
    // randomise the array  
    cardInfo.sort(() => Math.random() - 0.5);
    // create the HTML
    for (let i = 0; i < cardInfo.length; i++) {
        // learnt from https://stackoverflow.com/questions/5886144/create-divs-from-array-elements
        const cards = document.createElement('div');
        // https://stackoverflow.com/questions/1988514/javascript-css-how-to-add-and-remove-multiple-css-classes-to-an-element
        // add cards
        cards.classList.add('card');
        cards.setAttribute('name', cardInfo[i].name);
        cardArea.appendChild(cards);
        // add card front, showing the image, to each card
        const cardFront = document.createElement('img');
        cardFront.classList.add('cardFront');
        cardFront.setAttribute('src', cardInfo[i].image);
        cardFront.setAttribute('alt', 'image of a bear');
        cards.appendChild(cardFront);
        // add card back to each card
        const cardBack = document.createElement('div');
        cardBack.textContent = '?';
        cardBack.classList.add('cardBack');
        cards.appendChild(cardBack);
    }
}

generateCards();

// https://www.w3schools.com/howto/howto_js_toggle_class.asp
/**
 * This function adds or removes the class 'toggleCard' whenever a card is clicked
 */
function turnCard() {
    this.classList.toggle('toggleCard');
}

// https://linuxhint.com/add-class-to-clicked-element-using-javascript/
/**
 * This function add a class of 'flipCard' to any card that is clicked
 */
function flipCard() {
    this.classList.add('flipCard');
}

/**
* This function compares the names of the two flipped cards and check if they match
*/
function checkMatch() {

    // const button = document.getElementById('restart-won');

    // function doesn't execute until it's checked that two cards have been flipped
    if (flippedCards.length === 2) {

        // checks if the name value of the two cards match
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {

            // stops the matched cards being able to be clicked again and pushed the cards into a matchedCards array
            for (let card of flippedCards) {
                card.style.pointerEvents = 'none';
                matchedCards.push(card);
            }

            // removes the flipCard class for those cards that have been matched. 
            // There is a setTimeout of 1.5 seconds as this is how long it takes the card to flip back. 
            // This prevents the user from being able to click it again
            flippedCards[0].classList.remove('flipCard');
            flippedCards[0].classList.remove('flipCard');
        } else {
            // code if the two flipped cards don't match
            // https://stackoverflow.com/questions/69300285/how-to-remove-a-class-with-delay-after-a-button-is-pressed
            for (let card of flippedCards) {
                // removes the toggleCard class so the card flip back over. One second timer set so the card still flips over before flipping back
                setTimeout(function () {
                    card.classList.remove('toggleCard');
                }, 1000);
            }

            flippedCards[0].classList.remove('flipCard');
            flippedCards[0].classList.remove('flipCard');
        }
    }
}

/**
 * Adds a class to cards if all are matched. This gives an animation and then a winning page 
 */
function wonGame() {
    // checks how many cards are in the matchedCards array. If this equals the number of cards in game the user has won
    if (matchedCards.length === cards.length) {
        // delays animation by half a second to improve user experience
        setTimeout(function () {
            // adds the won-game-bears class which causes the cards to have a wiggle animation
            for (card of cardFronts) {
                card.classList.add('won-game-bears');
            }
        }, 500);

        // Congratulation page that appears two seconds after user has won the game. The delay is so the user will see the wiggle animation
        setTimeout(function () {
            const winningPage = document.getElementById('won-game');
            const winningPageHeading = document.querySelector('#winning-title');
            const timeCount = document.getElementById('time');
            const timeRemaining = timeCount.textContent;
            const flipCount = document.getElementById('flips');
            const flipsTaken = flipCount.textContent;
            winningPage.classList.remove('won-game-hidden');
            winningPage.classList.add('won-game-show');
            winningPageHeading.textContent = `Congratulations ${input.value}! You found all the matching bears in 
                    ${flipsTaken} flips and with ${timeRemaining} seconds remaining. Press below to start a new game:`;
        }, 2000);

        // button on winning page to refresh the browser and restart the game
        button = document.getElementById('restart-won');
        button.addEventListener('click', function () { location.reload(); });
    }
}

for (let card of cards) {
    card.addEventListener('click', turnCard);
    card.addEventListener('click', flipCard);
    card.addEventListener('click', checkMatch);
    card.addEventListener('click', wonGame);
    card.addEventListener('click', countFlip);
    card.addEventListener('click', disableGame);
};

/**
 * This function disables the event listeners while there are two unmatched cards flipped
 */
function disableGame() {
    const toggledCards = document.getElementsByClassName('toggleCard');
    if (toggledCards.length - matchedCards.length >= 2) {
        for (let card of cards) {
            card.removeEventListener('click', turnCard);
            card.removeEventListener('click', flipCard);
            card.removeEventListener('click', checkMatch);
            card.removeEventListener('click', wonGame);
            card.removeEventListener('click', countFlip);
            console.log('something');
        }
    } else {
        for (let card of cards) {
            card.addEventListener('click', turnCard);
            card.addEventListener('click', flipCard);
            card.addEventListener('click', checkMatch);
            card.addEventListener('click', wonGame);
            card.addEventListener('click', countFlip);
            card.addEventListener('click', disableGame);
        };
    }
}

const flipCount = document.getElementById('flips');
let flips = 0;
flipCount.textContent = flips;

function countFlip() {
    flipCount.textContent = flips + 1;
    console.log('card flipped');
    flips = parseInt(flipCount.textContent);
}

// create function that gives different time limits depending on the difficulty selected
const timeCount = document.getElementById('time');
let time = '100';
timeCount.textContent = time;
const selectDifficulty = document.getElementById('select-difficulty');

selectDifficulty.addEventListener('change', function difficulty() {
    if (selectDifficulty.value === 'easy') {
        let time = '100';
        timeCount.textContent = time;
    } else if (selectDifficulty.value === 'medium') {
        let time = '60';
        timeCount.textContent = time;
    } else {
        let time = '5';
        timeCount.textContent = time;
    };
});

/**
 * This function decreases the timer by one every second
 */
// JavaScript & the DOM  Getting Set Up  The < script > Element;
setInterval(function () {
    let currentTime = timeCount.innerHTML;
    currentTime--;
    timeCount.innerHTML = currentTime;

    // check to see if the timer reaches zero
    if (timeCount.textContent === '0') {
        // losing banner to appear
        const losingBanner = document.getElementById('lost-game');
        const losingBannerHeading = document.querySelector('#losing-title');
        losingBanner.classList.remove('lost-game-hidden');
        losingBanner.classList.add('lost-game-show');
        // button on losing page to refresh the browser and restart the game
        const button = document.getElementById('restart-lost');
        button.addEventListener('click', function () { location.reload(); });
        losingBannerHeading.textContent = `Sorry, ${input.value}, you didn't match all the bears in time! 
                 Press below to start a new game:`;
    };
}, 1000);

//button to give the user the opportunity to restart the game at any time
const restartButton = document.getElementById('restart-game');
restartButton.addEventListener('click', function () { location.reload(); });



// function lost();

// add event default to click functions?
// tidy up formatting
// add sound?
// improve images
// make the website responsive
// add 404 page