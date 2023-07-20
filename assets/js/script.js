const cardArea = document.getElementById('game-container');
const cardInfo = [
    { name: 'bearOne', image: './images/bear-one.webp' },
    { name: 'bearOne', image: './images/bear-one.webp' },
    { name: 'bearTwo', image: './images/bear-two.webp' },
    { name: 'bearTwo', image: './images/bear-two.webp' },
    { name: 'bearThree', image: './images/bear-three.webp' },
    { name: 'bearThree', image: './images/bear-three.webp' },
    { name: 'bearFour', image: './images/bear-four.webp' },
    { name: 'bearFour', image: './images/bear-four.webp' },
];

// learned from website https://www.slingacademy.com/article/ways-to-shuffle-an-array-in-javascript/#:~:text=3%20Using%20Lodash-,Using%20Sort()%20Function,sort(()%20%3D%3E%20Math.
/** This function takes the array of cards and randomly shuffles them */
function randomiseCards() {
    const shuffledCards = cardInfo.sort(() => Math.random() - 0.5);
    console.log(shuffledCards);
}


