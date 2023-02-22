let blueButton = document.getElementById('blue');
let redButton = document.getElementById('red');
let yellowButton = document.getElementById('yellow');
let cards = document.querySelectorAll('.card');
let activeButton = null;

function filterCards(color) {
    cards.forEach(card => {
        if (card.classList.contains(color)) {
            card.style.filter = 'blur(0)';
        } else {
            card.style.filter = 'blur(2px)';
        }
    });
    if (activeButton === document.getElementById(color)) {
        activeButton = null;
        cards.forEach(card => {
            card.style.filter = 'blur(0)';
        });
    } else {
        activeButton = document.getElementById(color);
    }
}

blueButton.addEventListener('click', () => filterCards('blue'));
redButton.addEventListener('click', () => filterCards('red'));
yellowButton.addEventListener('click', () => filterCards('yellow'));