// global variables
const howToPlay = document.querySelector('#how-to-play');
const howToPlayTitle = document.querySelector('#how-to-play-title');
const instructions = document.querySelector('#instructions-div');
const startGameButton = document.getElementById('start-button');
const startGameDiv = document.querySelector('#start-game-div-id');
const input = document.querySelector('#enter-name');
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
    { name: 'bearFive', image: 'assets/images/bear-five.webp' },
    { name: 'bearFive', image: 'assets/images/bear-five.webp' },
    { name: 'bearSix', image: 'assets/images/bear-six.webp' },
    { name: 'bearSix', image: 'assets/images/bear-six.webp' },
    { name: 'bearSeven', image: 'assets/images/bear-seven.webp' },
    { name: 'bearSeven', image: 'assets/images/bear-seven.webp' },
    { name: 'bearEight', image: 'assets/images/bear-eight.webp' },
    { name: 'bearEight', image: 'assets/images/bear-eight.webp' },
];
const cards = document.getElementsByClassName('card');
const cardFronts = document.getElementsByClassName('cardFront');
const flippedCards = document.getElementsByClassName('flipCard');
const toggledCards = document.getElementsByClassName('toggleCard');
// an array for the cards to go in when generated
let gameCards = [];
// an array for the cards to go in when matched
let matchedCards = [];
const flipCount = document.getElementById('flips');
let flips = 0;
flipCount.textContent = flips;
const endPage = document.getElementById('end-game');
const endPageHeading = document.querySelector('#end-game-title');
// const flipsTaken = flipCount.textContent;
const audioFlip = new Audio('assets/audio/card-flip-audio.mp3');
const audioMatch = new Audio('assets/audio/card-match-audio.mp3');
const timeCount = document.getElementById('time');
let time = '100';
timeCount.textContent = time;
// const timeRemaining = timeCount.textContent;
const selectDifficulty = document.getElementById('select-difficulty');
// const losingBanner = document.getElementById('lost-game');
// const losingBannerHeading = document.querySelector('#losing-title');
const endGameButton = document.getElementById('end-game-restart');
const restartButton = document.getElementById('restart-game');
// const buttonWon = document.getElementById('restart-won');

// to display the how to play instructions with the 'how to play' area is clicked 
// https://stackoverflow.com/questions/55147410/html-javascript-button-click-again-to-undo
let state = 0;
function howToPlayInstructions() {
    if (state == 0) {
        instructions.classList.add('instructions-visable');
        instructions.classList.remove('instructions-hidden');
        howToPlay.classList.remove('how-to-play-dropbox');
        howToPlay.classList.add('howToPlayVisible');
        state = 1;
        // to remove the how to play instructions when the how to play area is clicked again
    } else {
        instructions.classList.remove('instructions-visable');
        instructions.classList.add('instructions-hidden');
        howToPlay.classList.add('how-to-play-dropbox');
        howToPlay.classList.remove('howToPlayVisible');
        state = 0;
    }
}

howToPlayTitle.addEventListener('click', howToPlayInstructions);

// to move from the start screen to the main screen
// hides the start-game-div by removing the id and putting in a hide-div class

function hideStartPage(event) {
    if (input.value.length > 0) {
        startGameDiv.removeAttribute('id');
        startGameDiv.classList.add('hide-div');
        input.removeAttribute('id');
        input.classList.add('hide-div');
        startGameButton.removeAttribute('id');
        startGameButton.classList.add('hide-div');
        instructions.removeAttribute('id');
        instructions.classList.add('hide-div');
        howToPlay.classList.add('hide-div');
        event.preventDefault();
    }
}

document.addEventListener('DOMContentLoaded', startGame);

function startGame() {
    startGameButton.addEventListener('click', hideStartPage);
    startGameButton.addEventListener('click', generateCards);
}


/** This function generates cards into the game-container section */
function generateCards() {
    //     // learned from website https://www.slingacademy.com/article/ways-to-shuffle-an-array-in-javascript/#:~:text=3%20Using%20Lodash-,Using%20Sort()%20Function,sort(()%20%3D%3E%20Math.
    //     // randomise the array  
    cardInfo.sort(() => Math.random() - 0.5);
    //     // create the HTML
    for (let i = 0; i < cardInfo.length; i++) {
        // learnt from https://stackoverflow.com/questions/5886144/create-divs-from-array-elements
        let cardsDiv = document.createElement('div');
        // https://stackoverflow.com/questions/1988514/javascript-css-how-to-add-and-remove-multiple-css-classes-to-an-element
        // add cards
        cardsDiv.classList.add('card');
        cardsDiv.setAttribute('name', cardInfo[i].name);
        cardArea.appendChild(cardsDiv);
        // add card front, showing the image, to each card
        let cardFront = document.createElement('img');
        cardFront.classList.add('cardFront');
        cardFront.setAttribute('src', cardInfo[i].image);
        cardFront.setAttribute('alt', 'image of a bear');
        cardsDiv.appendChild(cardFront);
        // add card back to each card
        let cardBack = document.createElement('div');
        cardBack.textContent = '?';
        cardBack.classList.add('cardBack');
        cardsDiv.appendChild(cardBack);
        gameCards.push(cardsDiv);

        for (let card of gameCards) {
            card.addEventListener('click', turnCard);
            card.addEventListener('click', abortTime);
            card.addEventListener('click', timeGame);
            card.addEventListener('click', flipCard);
            card.addEventListener('click', checkMatch);
            card.addEventListener('click', wonGame);
            card.addEventListener('click', countFlip);
            card.addEventListener('click', disableGame);
            card.addEventListener('click', disableDifficulty);
            card.addEventListener('click', audioPlay);
        }
    }
}

// https://www.w3schools.com/howto/howto_js_toggle_class.asp
/**
 * This function adds or removes the class 'toggleCard' whenever a card is clicked
 */
function turnCard() {
    this.classList.toggle('toggleCard');
}

// https://linuxhint.com/add-class-to-clicked-element-using-javascript/
// https://foolishdeveloper.com/how-to-play-sound-on-click-using-javascript/
/**
 * This function add a class of 'flipCard' and sound effect to any card that is clicked
 */
function flipCard() {
    this.classList.add('flipCard');
}

function audioPlay() {
    if (flippedCards.length === '2' && flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
        audioFlip.play();
    } else {
        audioMatch.play();
    }
}

/**
* This function compares the names of the two flipped cards and check if they match
*/
function checkMatch() {
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
            for (let card of cardFronts) {
                card.classList.add('won-game-bears');
            }
        }, 500);

        // Congratulation page that appears two seconds after user has won the game. The delay is so the user will see the wiggle animation
        setTimeout(function () {
            endPage.classList.remove('end-game-hidden');
            endPage.classList.add('end-game-show');
            endPageHeading.textContent = `Congratulations ${input.value}! You found all the matching bears in 
                    ${flipCount.textContent} flips and with ${timeCount.textContent} seconds remaining. Press below to start a new game:`;
        }, 2000);

        // button on winning page to refresh the browser and restart the game;
        endGameButton.addEventListener('click', restartGame);
    }
}

/**
 * This function disables the event listeners while there are two unmatched cards flipped
 */
function disableGame() {
    // this needs to be a formula as the toggleClass class still shows when the cards are matched. This ensures it's only the number of  
    if (toggledCards.length - matchedCards.length >= 2) {
        for (let card of gameCards) {
            card.removeEventListener('click', turnCard);
            card.removeEventListener('click', flipCard);
            card.removeEventListener('click', checkMatch);
            card.removeEventListener('click', wonGame);
            card.removeEventListener('click', countFlip);
        }
    } else {
        for (let card of gameCards) {
            card.addEventListener('click', turnCard);
            card.addEventListener('click', flipCard);
            card.addEventListener('click', checkMatch);
            card.addEventListener('click', wonGame);
            card.addEventListener('click', countFlip);
            card.addEventListener('click', disableGame);
        }
    }
}

// this fixes a delay for the user being able to click the next card
setInterval(disableGame, 500);

function countFlip() {
    flipCount.textContent = flips + 1;
    flips = parseInt(flipCount.textContent);
}

// create function that gives different time limits depending on the difficulty selected
function difficulty() {
    if (selectDifficulty.value === 'easy') {
        time = 100;
        timeCount.textContent = '100';
    } else if (selectDifficulty.value === 'medium') {
        time = 60;
        timeCount.textContent = '60';
    } else {
        time = 30;
        timeCount.textContent = '5';
    }
}

selectDifficulty.addEventListener('change', difficulty);

function disableDifficulty() {
    // https://www.w3schools.com/jsref/prop_select_disabled.asp
    document.getElementById("select-difficulty").disabled = true;
}

/**
 * This function decreases the timer by one every second
 */
let abort = false;
function timeGame() {
    if (abort) {
        return;
    } else {
        let currentTime = timeCount.innerHTML;
        currentTime--;
        timeCount.innerHTML = currentTime;
        setTimeout(timeGame, 1000);
        // to stop the function being called with every click
        for (let card of gameCards) {
            card.removeEventListener('click', timeGame);
        }
    }
}

/**
 * This function checks, each second, if the timer has reached zero. If so it will 
 * display a lost game page
 */
function lostGame() {
    // check to see if the timer reaches zero
    if (timeCount.textContent === '0') {
        // losing banner to appear

        endPage.classList.remove('lost-game-hidden');
        endPage.classList.add('lost-game-show');
        // button on losing page to refresh the browser and restart the game
        // buttonLost.addEventListener('click', restartGame);
        endPageHeading.textContent = `Sorry ${input.value}, you didn't match all the bears in time! 
                 Press below to start a new game:`;
    }
}

setInterval(lostGame, 100);

function restartGame() {
    for (let card of gameCards) {
        card.classList.remove('toggleCard');
        card.style.pointerEvents = 'all';
    }
    document.getElementById("select-difficulty").disabled = false;
    abort = true;
    difficulty();
    flips = 0;
    flipCount.textContent = 0;
    // https://stackoverflow.com/questions/14555214/remove-all-divs-from-in-a-parent-div
    document.getElementById('game-container').innerHTML = "";
    generateCards();
    endPage.classList.add('end-game-hidden');
    endPage.classList.remove('end-game-show');
    endPageHeading.textContent = '';
    // winningPage.classList.add('end-game-hidden');
    // winningPage.classList.remove('end-game-show');
    // winningPageHeading.textContent = '';
}

function abortTime() {
    if (abort === true) {
        abort = false;
    }
}

for (let card of gameCards) {
    card.addEventListener('click, abortTime');
}

restartButton.addEventListener('click', restartGame);

// // add event default to click functions?
// // add sound?
// // make the website responsive
// // add 404 page