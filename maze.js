window.addEventListener("load", function () {
  list_of_boundary = document.getElementsByClassName("boundary");
  var start = document.getElementById("start");
  var end = document.getElementById("end");
  var isStart = false;
  var stats = "Win";
  var gameStatus = document.getElementById("status");
  var maze = this.document.getElementById("maze");
  var isleaveMaze = false;

  maze.addEventListener("mouseleave", function () {
    isleaveMaze = true;
    gameStatus.innerText = "Move your mouse over the 'S' to begin.";
    // console.log(isStart);
  });
  maze.addEventListener("mouseover", () => {
    isleaveMaze = false;
  });

  start.addEventListener("mouseover", function () {
    startGame();
  });

  end.addEventListener("mouseover", function () {
    // console.log(isStart, isleaveMaze);
    if (isStart && isleaveMaze) {
      stats = "Lose";
    }
    endGame(stats);
  });

  // boundary Sensitive
  (() => {
    for (let index = 0; index < list_of_boundary.length; index++) {
      list_of_boundary[index].addEventListener("mouseover", function () {
        endGame("Lose");
      });
    }
  })();

  //1- startGame
  function startGame() {
    // isleaveMaze=false;
    isStart = true;
    stats = "Win";
    for (let index = 0; index < list_of_boundary.length; index++) {
      list_of_boundary[index].classList.remove("succeed");
      list_of_boundary[index].classList.remove("youlose");
      gameStatus.innerText = "you are starting the Game.";
    }
  }
  //2- endGame
  function endGame(stats) {
    if (isStart) {
    isStart = false;
    if (stats == "Win") {
      gameStatus.innerText = "You win! :)";
      for (let index = 0; index < list_of_boundary.length; index++) {
        list_of_boundary[index].classList.add("succeed");
      }
    } else if (stats == "Lose") {
      gameStatus.innerText = "You lose! :(";
      for (let index = 0; index < list_of_boundary.length; index++) {
        list_of_boundary[index].classList.add("youlose");
      }
      //wite 2 second
      }
    }
  }
});
