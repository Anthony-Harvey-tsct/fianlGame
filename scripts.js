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

window.addEventListener("keydown", event => {

  if (event.key == "ArrowLeft") {

    const timeout = value => {
      setTimeout(() => {
        snake.style.left = snakeleft + 'px'

        snakeleft -= 10
        if (snakeleft >=0) {
          timeout(value)
        }
      }, 150)
    }
    timeout(snakeleft);

  } else if (event.key == "ArrowUp") {

    const timeout = value => {
      setTimeout(() => {
        snake.style.top = snaketop + 'px'

        snaketop -= 10
        if (snaketop >=0) {
          timeout(value)
        }
      }, 150)
    }
    timeout(snaketop);


  }
  else if (event.key == "ArrowRight") {

    const timeout = value => {
      setTimeout(() => {
        snake.style.left = snakeleft + 'px'

         snakeleft += 10
        if (snakeleft <=580) {
          timeout(value)
        }
      }, 150)
    }
    timeout(snakeleft);
  }

  else if (event.key == "ArrowDown") {

    const timeout = value => {
      setTimeout(() => {
        snake.style.top = snaketop + 'px'

        snaketop += 10
        if (snaketop <=580) {
          timeout(value)
        }
      }, 150)
    }
    timeout(snaketop);
}

})
