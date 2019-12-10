const gameBoard = document.getElementById('gameBoard');
const snake = document.getElementById('snake');
const apple = document.getElementById('apple');
const scoreBoard = document.getElementById('scoreBoard');
const resetBoard = document.getElementById('resetBoard');

//define the units
let appletop = 200;
let appleleft = 300;
let snaketop = 300;
let snakeleft = 300;
let value = 300;

// moving the snake

let timer = setInterval(function() {}, 100);

window.addEventListener("keydown", event => {

  if (event.key == "ArrowLeft") {

      event.preventDefault();
    clearInterval(timer);
    timer = setInterval(function() {
      if (snakeleft >= 0) {
        snake.style.left = snakeleft + 'px'
        snakeleft -= 10;
      }
    }, 100);


  } else if (event.key == "ArrowUp") {
event.preventDefault();
    clearInterval(timer);

    timer = setInterval(function() {
      if (snaketop >= 0) {
        snake.style.top = snaketop + 'px'

        snaketop -= 10;
      }
    }, 100);
  } else if (event.key == "ArrowRight") {
event.preventDefault();
    clearInterval(timer);

    timer = setInterval(function() {
      if (snakeleft <= 580) {
        snake.style.left = snakeleft + 'px'

        snakeleft += 10;
      }
    }, 100);
  } else if (event.key == "ArrowDown") {
event.preventDefault();
    clearInterval(timer);

    timer = setInterval(function() {
      if (snaketop <= 580) {
        snake.style.top = snaketop + 'px'

        snaketop += 10;
      }
    }, 100);
  }

});
