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
snake.style.top = snaketop + "px";
snake.style.left = snakeleft + "px";
// moving the snake

window.addEventListener("keydown", event => {

  if (event.key == "ArrowLeft") {

    const timeout = value => {
      setTimeout(() => {
        snake.style.left = value + 'px'

        value -= 10
        if (value >=0) {
          timeout(value)
        }
      }, 150)
    }
    timeout(snakeleft);

  } else if (event.key == "ArrowUp") {

    const timeout = value => {
      setTimeout(() => {
        snake.style.top = value + 'px'

        value -= 10
        if (value >=0) {
          timeout(value)
        }
      }, 150)
    }
    timeout(snaketop);


  }
  else if (event.key == "ArrowRight") {

    const timeout = value => {
      setTimeout(() => {
        snake.style.left = value + 'px'

        value += 10
        if (value <= 300) {
          timeout(value)
        }
      }, 150)
    }
    timeout(snakeleft);
  }

  else if (event.key == "ArrowDown") {

    const timeout = value => {
      setTimeout(() => {
        snake.style.top = value + 'px'

        value += 10
        if (value <= 300) {
          timeout(value)
        }
      }, 150)
    }
    timeout(snaketop);
}


})
