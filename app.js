// Players //
function players(symbol) {
    return {
      player1() {
        symbol = "X";
        return symbol
      },
      player2() {
        symbol = "O";
        return symbol
      }
    }
  }
  
  
  // Makes Divs Clickable //
  let turn = 1
  let div = document.querySelectorAll(".square");
  let playerTurn = document.querySelector(".playerDisplay");
  let player1 = players("X");
  let player2 = players("O");
  
  div.forEach(function (div) {
    div.addEventListener("click", function () {
      if (div.innerHTML != "") {
        div.innerHTML += "";
      } else if (turn % 2 != 0) {
        playerTurn.innerHTML = "";
        div.innerHTML += player1.player1();
        playerTurn.innerHTML += "Player O's Turn";
        checksWinner()
        turn += 1;
      } else {
        playerTurn.innerHTML = "";
        playerTurn.innerHTML = "Player X's Turn"
        div.innerHTML += player2.player2();
        checksWinner();
        turn += 1;
      }
    });
  });
  
  // Checks Winner //
  let box0 = document.getElementById("box0");
  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");
  let box3 = document.getElementById("box3");
  let box4 = document.getElementById("box4");
  let box5 = document.getElementById("box5");
  let box6 = document.getElementById("box6");
  let box7 = document.getElementById("box7");
  let box8 = document.getElementById("box8");
  let winnerScreen = document.querySelector(".winnerScreen")
  
  function checksWinner() {
    if (box0.innerHTML === box1.innerHTML && box1.innerHTML === box2.innerHTML && box2.innerHTML != "") {
      winnerScreen.style.display = "flex";
      keepText();
      addScore();
    } else if (box3.innerHTML === box4.innerHTML && box4.innerHTML === box5.innerHTML && box5.innerHTML != "") {
      winnerScreen.style.display = "flex";
      keepText();
      addScore();
    } else if (box6.innerHTML === box7.innerHTML && box7.innerHTML === box8.innerHTML && box8.innerHTML != "") {
      winnerScreen.style.display = "flex";
      keepText();
      addScore();
    } else if (box0.innerHTML === box3.innerHTML && box3.innerHTML === box6.innerHTML && box6.innerHTML != "") {
      winnerScreen.style.display = "flex";
      keepText();
      addScore();
    } else if (box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML && box7.innerHTML != "") {
      winnerScreen.style.display = "flex";
      keepText();
      addScore();
    } else if (box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML && box8.innerHTML != "") {
      winnerScreen.style.display = "flex";
      keepText();
      addScore();
    } else if (box0.innerHTML === box4.innerHTML && box4.innerHTML === box8.innerHTML && box8.innerHTML != "") {
      winnerScreen.style.display = "flex";
      keepText();
      addScore();
    } else if (box2.innerHTML === box4.innerHTML && box4.innerHTML === box6.innerHTML && box6.innerHTML != "") {
      winnerScreen.style.display = "flex";
      keepText();
      addScore();
    }
  }
  
  function clear(div) {
    div.innerHTML = "";
    turn = 1;
    playerTurn.innerHTML = "Player X's Turn";
  }
  
  
  // Restart Button //
  let restart = document.querySelector(".restart");
  
  restart.addEventListener("click", function () {
    div.forEach(function (div) {
      clear(div);
    })
  });
  
  // Back or X Button //
  let back = document.querySelector(".back");
  back.addEventListener("click", function () {
    winnerScreen.style.display = "none";
    div.forEach(function (div) {
      clear(div);
    })
  });
  
  // Turn Text to Nothing //
  function keepText() {
    if (turn % 2 != 0) {
      playerTurn.innerHTML = "Player X's Turn";
    } else (playerTurn.innerHTML = "Player O's Turn")
  };
  
  // Add Score //
  let player1score = document.querySelector(".player1Score");
  let player2score = document.querySelector(".player2Score");
  let winner = document.querySelector(".winnerMessage")
  let p1Score = 0;
  let p2Score = 0;
  player1score.innerHTML = p1Score;
  player2score.innerHTML = p2Score;
  
  function p1reset() {
    p1Score = 0;
    player1score.innerHTML = p1Score;
  }
  
  function p2reset() {
    p2Score = 0;
    player2score.innerHTML = p2Score;
  }
  
  function addScore() {
    if (turn % 2 != 0) {
      p1Score += 1;
      player1score.innerHTML = p1Score;
      winner.innerHTML = "Player 1 Wins!"
    } else {
      p2Score += 1;
      player2score.innerHTML = p2Score;
      winner.innerHTML = "Player 2 Wins!"
    }
  };
  
  // Reset Button //
  let reset = document.querySelector(".reset");
  reset.addEventListener("click", function () {
    winnerScreen.style.display = "none";
    div.forEach(function (div) {
      clear(div);
      p1reset();
      p2reset();
    })
  });