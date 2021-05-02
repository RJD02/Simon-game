const buttonColors = ['red', 'blue', 'green', 'yellow']
const gamePattern = []
let userClickedPattern = []
let level = -1

function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);
}

function nextSequence() {
    level++;
    $('#level-title').text(`Level ${level}`);
    const newColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(newColor);
    playSound(newColor);
    animatePress(newColor);
}