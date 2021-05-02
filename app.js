const buttonColors = ['red', 'blue', 'green', 'yellow']
const gamePattern = []
const userClickedPattern = []
let level = 0
// Generating new Sequence(adding a new button to press)
function nextSequence() {
    const rand = Math.floor(Math.random() * 4);
    let newColor = buttonColors[rand];
    gamePattern.push(newColor);
    playSound(newColor);
    $(`.${newColor}`).fadeOut(100).fadeIn(100);
}

$('.btn').click(function (event) {
    console.log(event.target.id);
    playSound(event.target.id);
    $(`.${event.target.id}`).fadeOut(100).fadeIn(100);
})

function playSound(color) {
    const audio = new Audio(`sounds/${color}.mp3`)
    audio.play();
}

function newGame() {
    let i = 0;
    while(userClickedPattern[i] === gamePattern[i]) {
        i++;
    }
}