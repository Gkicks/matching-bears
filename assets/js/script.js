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
const cardFronts = document.getElementsByClassName('cardFront');
const flippedCards = document.getElementsByClassName('flipCard');
const toggledCards = document.getElementsByClassName('toggleCard');
// an array for the cards to go in when generated
const gameCards = [];
// an array for the cards to go in when matched
const matchedCards = [];
const flipCount = document.getElementById('flips');
let flips = 0;
flipCount.textContent = flips;
const endPage = document.getElementById('end-game');
const endPageHeading = document.querySelector('#end-game-title');

const timeCount = document.getElementById('time');
let time = '100';
timeCount.textContent = time;
const selectDifficulty = document.getElementById('select-difficulty');
const endGameButton = document.getElementById('end-game-restart');
const restartButton = document.getElementById('restart-game');
const audioChoice = document.getElementById('audio-choice');
const audioFlip = new Audio('assets/audio/card-flip-audio.mp3');
const audioMatch = new Audio('assets/audio/card-match-audio.mp3');
const audioChoiceText = document.getElementById('font-awesome');

// to run statGame function when the DOM has loaded
document.addEventListener('DOMContentLoaded', startGame);

// to display the how to play instructions with the 'how to play' area is clicked 
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
        return;
    }
}

function startGame() {
    startGameButton.addEventListener('click', hideStartPage);
    startGameButton.addEventListener('click', generateCards);
    return;
}

/** This function generates cards into the game-container section */
function generateCards() {
    // randomise the array  
    cardInfo.sort(() => Math.random() - 0.5);
    // create the HTML
    for (let i = 0; i < cardInfo.length; i++) {
        let cardsDiv = document.createElement('div');
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
        }

    }
}

/**
 * This function adds or removes the class 'toggleCard' whenever a card is clicked
 */
function turnCard() {
    this.classList.toggle('toggleCard');
}

/**
 * This function add a class of 'flipCard' and sound effect to any card that is clicked
 */
function flipCard() {
    this.classList.add('flipCard');
    audioFlipPlay();
}

/**
* This function compares the names of the two flipped cards and check if they match
*/
function checkMatch() {
    // function doesn't execute until it's checked that two cards have been flipped
    if (flippedCards.length === 2) {
        // checks if the name value of the two cards match
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            setTimeout(function () {
                audioMatch.currentTime = 0;
                audioMatch.play();
            }, 500);

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
    if (matchedCards.length === gameCards.length) {
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
            card.removeEventListener('click', wonGame);
            card.removeEventListener('click', checkMatch);
        }
        checkMatch();
    } else {
        for (let card of gameCards) {
            card.addEventListener('click', turnCard);
            card.addEventListener('click', flipCard);
            card.addEventListener('click', checkMatch);
            card.addEventListener('click', wonGame);
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
        // end page to appear
        endPage.classList.remove('end-game-hidden');
        endPage.classList.add('end-game-show');
        endPageHeading.textContent = `Sorry ${input.value}, you didn't match all the bears in time! 
                 Press below to start a new game:`;
    }
}

// to check each tenth second if the timer has reached zero
setInterval(lostGame, 100);

endGameButton.addEventListener('click', restartGame);

function restartGame() {
    for (let card of gameCards) {
        card.classList.remove('toggleCard');
        card.style.pointerEvents = 'all';
    }
    matchedCards.length = 0;
    gameCards.length = 0;
    document.getElementById("select-difficulty").disabled = false;
    abort = true;
    difficulty();
    flips = 0;
    flipCount.textContent = 0;
    document.getElementById('game-container').innerHTML = "";
    generateCards();
    endPage.classList.add('end-game-hidden');
    endPage.classList.remove('end-game-show');
    endPageHeading.textContent = '';
}

function abortTime() {
    if (abort === true) {
        abort = false;
    }
}

restartButton.addEventListener('click', restartGame);
restartButton.addEventListener('click', confirmRestart);

function confirmRestart() {
    confirm('Are you sure you want to restart the game?');
}

function audioFlipPlay() {
    if (audioState === 1) {
        return;
    }
    audioFlip.currentTime = 0;
    audioFlip.play();
}

let audioState = 0;
function audioVolume() {
    if (audioState == 0) {
        audioChoiceText.classList.remove('fa-volume-high');
        audioChoiceText.classList.add('fa-volume-xmark');
        audioChoice.muted = true;
        audioState = 1;
    } else {
        audioChoiceText.classList.add('fa-volume-high');
        audioChoiceText.classList.remove('fa-volume-xmark');
        audioChoice.muted = false;
        audioState = 0;
    }
}

audioChoice.addEventListener('click', audioVolume);