const scores = document.getElementById("score");
const end = document.getElementById("gameOver");
const button = document.getElementById("button");
// defining
let direction = "";
let snakeleft = 100;
let snaketop = 100;
let pickedUp = false;
let score = 0;

// creating keyevents and controlling the snake using arrow keys
window.addEventListener("keydown", event => {
  if (event.key == "ArrowRight") {
    direction = "right";
  }
  else if (event.key == "ArrowDown") {
    direction = "down";
  }
  else if (event.key == "ArrowUp") {
    direction = "top";
  }
  else if (event.key == "ArrowLeft") {
    direction = "left";
  }
  event.preventDefault();
});
const main = document.getElementsByTagName("main")[0];
let snake = [
  [snakeleft, snaketop]
];
let food = [300, 300];
let time = setInterval(draw, 100);


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
}
