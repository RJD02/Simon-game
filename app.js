const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userclickedPattern = [];
let started = false;
let level = 0;

$(document).keypress(() => {
  if (!started) {
    $("#level-title").text(`Level ${level}`);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  let clickedColor = $(this).attr("id");
  userclickedPattern.push(clickedColor);
//   console.log(clickedColor);
  playSound(clickedColor);
  animatePress(clickedColor);
  checkAnswer(userclickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (userclickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userclickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      startOver();
    }
  }

function nextSequence() {
    userclickedPattern = []
  level++;
  $("#level-title").text(`Level ${level}`);
  let randomColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomColor);
  playSound(randomColor);
//   console.log(randomColor);
  $(`.${randomColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(name) {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(name) {
  $(`.${name}`).addClass("pressed");
  setTimeout(() => {
    $(`.${name}`).removeClass("pressed");
  }, 100);
}

function startOver() {
    started = false;
    gamePattern = [];
    level = 0;
}