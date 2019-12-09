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

let timer = setInterval(moveUp, 1000);

window.addEventListener("keydown", event => {

  if (event.key == "ArrowLeft") {



    clearInterval(timer);
       timer = setInterval(function() {
         if (snakeleft >=0) {
           snake.style.left = snakeleft + 'px'
           snakeleft -= 10
         }
       }, 150);
    // const timeout = value => {
    //   setTimeout(() => {
    //     snake.style.left = snakeleft + 'px'
    //
    //     snakeleft -= 10
    //     if (snakeleft >=0) {
    //       timeout(value)
    //     }
    //   }, 150)
    // }
    // timeout(snakeleft);

  } else if (event.key == "ArrowUp") {

    clearInterval(timer);

       timer = setInterval(function() {
         if (snaketop >=0) {
         snake.style.top = snaketop + 'px'

         snaketop -= 10
         }
       }, 150);
     }

     //const timeout = value => {
    //   setTimeout(() => {
    //     snake.style.top = snaketop + 'px'
    //
    //     snaketop -= 10;
    //     if (snaketop >=0) {
    //       timeout(value)
    //     }
    //   }, 150)
    // }
    // timeout(snaketop);



  else if (event.key == "ArrowRight") {
    clearInterval(timer);

       timer = setInterval(function() {
        if (snakeleft <=580) {
         snake.style.left = snakeleft + 'px'

         snakeleft += 10
        }
       }, 150);
     }


  else if (event.key == "ArrowDown") {

    clearInterval(timer);

       timer = setInterval(function() {
          if (snaketop <=580) {
         snake.style.top = snaketop + 'px'

         snaketop += 10
        }
       }, 150);
     }
    // timer = setInterval(moveDown, 1000);

    // const timeout = value => {
    //   setTimeout(() => {
    //     snake.style.top = snaketop + 'px'
    //
    //     snaketop += 10
    //     if (snaketop <=580) {
    //       timeout(value)
    //     }
    //   }, 150)
    // }
    // timeout(snaketop);
})

function moveUp() {
  console.log("Up");
}
function moveLeft() {
  console.log("left")
}
function moveDown() {
  console.log("Down");
}
function moveRight() {
  console.log("Right")
}

function advanceSnake() {
     // Create the new Snake's head
     const snaketop = {x: snake[0].x + dx, y: snake[0].y + dy};
     // Add the new head to the beginning of snake body
     snake.unshift(snake);
     const didEatApple = snake[0].x === appleX && snake[0].y === appleY;
     if (didEatApple) {
       // Increase score
       score += 10;
       // Display score on screen
       document.getElementById(' ') = score;
       // Generate new food location
       createApple();
     } else {
       // Remove the last part of snake body
       snake.pop();
     }
   }
   /**
    * Returns true if the head of the snake touched another part of the game
    * or any of the walls
    */
   function didGameEnd() {
     for (let i = 4; i < snake.length; i++) {
       if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
     }
     const hitLeftWall = snake[0].x < 0;
     const hitRightWall = snake[0].x > gameBoard.width - 10;
     const hitToptWall = snake[0].y < 0;
     const hitBottomWall = snake[0].y > gameBoard.height - 10;
     return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
   }
