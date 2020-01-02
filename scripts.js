const scores = document.getElementById("score");
const end = document.getElementById("gameOver");
const highScore = document.getElementById("highScore");
const button = document.getElementById("button");
// defining
let direction = "";
let snakeleft = 100;
let snaketop = 100;
let pickedUp = false;
let score = 0;
let int = 80;

// creating keyevents and controlling the snake using arrow keys
window.addEventListener("keydown", event => {
  if (event.key == "ArrowRight") {
    event.preventDefault();
    direction = "right";
  } else if (event.key == "ArrowDown") {
    event.preventDefault();
    direction = "down";
  } else if (event.key == "ArrowUp") {
    event.preventDefault();
    direction = "top";
  } else if (event.key == "ArrowLeft") {
    event.preventDefault();
    direction = "left";
  }

});
const main = document.getElementsByTagName("main")[0];
let snake = [
  [snakeleft, snaketop]
];
let food = [300, 300];
let time = setInterval(draw, 80);


function draw() {

  while (main.firstChild) {
    main.firstChild.remove();
  }
  if (direction == "right") {
    snakeleft = snakeleft + 10;
    snake.unshift([snakeleft, snaketop])
    if (!pickedUp) {
      snake.pop();
    }

  } else if (direction == "down") {
    snaketop = snaketop + 10;
    snake.unshift([snakeleft, snaketop]);
    if (!pickedUp) {
      snake.pop();
    }
  } else if (direction == "left") {
    snakeleft = snakeleft - 10;
    snake.unshift([snakeleft, snaketop]);
    if (!pickedUp) {
      snake.pop();
    }
  } else if (direction == "top") {
    snaketop = snaketop - 10;
    snake.unshift([snakeleft, snaketop]);
    if (!pickedUp) {
      snake.pop();

    }

  }
  pickedUp = false;
  for (const newpart of snake) {
    const div = document.createElement("div");
    div.style.left = newpart[0] + "px";
    div.style.top = newpart[1] + "px";
    div.style.color = "red";
    main.appendChild(div);
  }
  const apple = document.createElement("div");
  apple.className = "apple";
  apple.style.left = food[0] + "px";
  apple.style.top = food[1] + "px";
  apple.style.color = "green";
  main.appendChild(apple);

  // randomizing the snake and adding the score
  if (snake[0][0] == food[0] && snake[0][1] == food[1]) {
    pickedUp = true;
    food = [Math.floor(Math.random() * 30) * 20, Math.floor(Math.random() * 30) * 20];
    //made score increase
    score++;
    scores.textContent = score;
    // make the snake faster
    clearInterval(time);
    int -= 3;
    time = setInterval(draw, int);
  }
  //  game Over
  if (snakeleft >= 590 || snaketop >= 590 || snakeleft < 0 || snaketop < 0) {
    clearInterval(time);
    end.style.visibility = "visible";

  }
  if (score == 20) {
    highScore.style.visibility = "visible";
  }

  // reset score
  button.addEventListener("click", resetscore)

  function resetscore() {
    clearInterval(time);

    scores.textContent = "0";
    score = 0;
    scores.textContent = "0";


  }
  // reset the game
  button.addEventListener("click", game)

  function game() {
    clearInterval(time);
    end.style.visibility = "hidden";
    highScore.style.visibility = "hidden";
    food = [Math.floor(Math.random() * 30) * 20, Math.floor(Math.random() * 30) * 20];


  }
  button.addEventListener("click", startgame)

  function startgame() {
    clearInterval(time);

    snakeleft = 100;
    snaketop = 100;

    snake = [
      [snakeleft, snaketop]
    ]

    direction = "";
    clearInterval(time);
    time = setInterval(draw, 80);

  }

}
