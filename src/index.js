import "./styles.css";

var counter = 0;
var clockCounter = 0;
var timeoutID;
var timeinterval;
var width = 0;

var clock = document.getElementById("clockdiv");
var elem = document.querySelector(".determinate");

const col = document.querySelectorAll(".col");

function move() {
  clearWidth();
  clearInterval(id);
  var width = 0;
  var id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      clearWidth();
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

if ((counter = 0)) {
  timeinterval = setInterval(updateClock, 1000);
}

function clearWidth() {
  width = 0;
  elem.style.width = width + "%";
}

function updateClock() {
  clock.innerHTML = 10 - clockCounter + " secounds left";
  clockCounter++;
}

for (var i = 0; i < col.length; i++) {
  col[i].addEventListener("click", function() {
    tableText(this, col[i]);
  });
}

function tableText(cell) {
  if (counter % 2 === 0) {
    if (cell.innerHTML === "") {
      cell.innerHTML = "X";
      cell.style.backgroundColor = "rgb(124, 252, 0)";
      cell.style.fontFamily = "Helvetica";
      cell.style.fontSize = "30px";
      ClearTimeout(this);
      changeTurn(this);
      move();
      whoWon();
      checkDraw();
      counter++;
    } else {
      alert("Pick other cell, it's already populated:(");
    }
  } else {
    if (cell.innerHTML === "") {
      cell.innerHTML = "O";
      cell.style.backgroundColor = "rgb(250, 128, 114)";
      cell.style.fontFamily = "Helvetica";
      cell.style.fontSize = "30px";
      ClearTimeout(this);
      changeTurn(this);
      move();
      whoWon();
      checkDraw();
      counter++;
    } else {
      alert("Pick other cell, it's already populated:(");
    }
  }
}

function changeTurn() {
  clockCounter = 0;
  clearInterval(timeinterval);
  timeinterval = setInterval(updateClock, 1000);
  timeoutID = setTimeout(alertTimeout, 10000);
  updateClock();
}

function alertTimeout() {
  counter++;
  alert("Timeout!");
  changeTurn();
  move();
}

function ClearTimeout() {
  clearTimeout(timeoutID);
}

function whoWon(table) {
  var xory = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var vaaka1 = 0;
    var vaaka2 = 0;
    var vaaka3 = 0;
    var vaaka4 = 0;
    var vaaka5 = 0;
    var pysty1 = 0;
    var pysty2 = 0;
    var pysty3 = 0;
    var pysty4 = 0;
    var pysty5 = 0;
    var viisto1 = 0;
    var viisto2 = 0;

    var round = 0;

    for (var j = 0; j < 5; j++) {
      round++;
      if (col[j].innerHTML === xory[i]) {
        vaaka1++;
        if (round === 1) {
          pysty1++;
          viisto1++;
        }
        if (round === 2) {
          pysty2++;
        }
        if (round === 3) {
          pysty3++;
        }
        if (round === 4) {
          pysty4++;
        }
        if (round === 5) {
          pysty5++;
          viisto2++;
        }
      }
      if (col[j + 5].innerHTML === xory[i]) {
        vaaka2++;
        if (round === 1) {
          pysty1++;
        }
        if (round === 2) {
          pysty2++;
          viisto1++;
        }
        if (round === 3) {
          pysty3++;
        }
        if (round === 4) {
          pysty4++;
          viisto2++;
        }
        if (round === 5) {
          pysty5++;
        }
      }
      if (col[j + 10].innerHTML === xory[i]) {
        vaaka3++;
        if (round === 1) {
          pysty1++;
        }
        if (round === 2) {
          pysty2++;
        }
        if (round === 3) {
          pysty3++;
          viisto1++;
          viisto2++;
        }
        if (round === 4) {
          pysty4++;
        }
        if (round === 5) {
          pysty5++;
        }
      }
      if (col[j + 15].innerHTML === xory[i]) {
        vaaka4++;
        if (round === 1) {
          pysty1++;
        }
        if (round === 2) {
          pysty2++;
          viisto2++;
        }
        if (round === 3) {
          pysty3++;
        }
        if (round === 4) {
          pysty4++;
          viisto1++;
        }
        if (round === 5) {
          pysty5++;
        }
      }
      if (col[j + 20].innerHTML === xory[i]) {
        vaaka5++;
        if (round === 1) {
          pysty1++;
          viisto2++;
        }
        if (round === 2) {
          pysty2++;
        }
        if (round === 3) {
          pysty3++;
        }
        if (round === 4) {
          pysty4++;
        }
        if (round === 5) {
          pysty5++;
          viisto1++;
        }
      }
      // VIISTO PUUTTUU!!
    }

    if (
      vaaka1 === 5 ||
      vaaka2 === 5 ||
      vaaka3 === 5 ||
      vaaka4 === 5 ||
      vaaka5 === 5 ||
      pysty1 === 5 ||
      pysty2 === 5 ||
      pysty3 === 5 ||
      pysty4 === 5 ||
      pysty5 === 5 ||
      viisto1 === 5 ||
      viisto2 === 5
    ) {
      if (xory[i] === "X") {
        alert("Player 1 won!");
        //alert("Player 1 vs. Player 2: " + victories1 + " - " + victories2);
        clearTable();
        counter = 1;
        ClearTimeout();
        clearWidth();
        vaaka1 = 0;
        vaaka2 = 0;
        vaaka3 = 0;
        vaaka4 = 0;
        vaaka5 = 0;
        pysty1 = 0;
        pysty2 = 0;
        pysty3 = 0;
        pysty4 = 0;
        pysty5 = 0;
        viisto1 = 0;
        viisto2 = 0;
        break;
      }

      if (xory[i] === "O") {
        alert("Player 2 won!");
        //alert("Player 1 vs. Player 2: " + victories1 + " - " + victories2);
        clearTable();
        counter = 1;
        ClearTimeout();
        clearWidth();
        vaaka1 = 0;
        vaaka2 = 0;
        vaaka3 = 0;
        vaaka4 = 0;
        vaaka5 = 0;
        pysty1 = 0;
        pysty2 = 0;
        pysty3 = 0;
        pysty4 = 0;
        pysty5 = 0;
        viisto1 = 0;
        viisto2 = 0;
        break;
      }
    }
  }
}

function checkDraw() {
  var count = 0;
  for (var i = 0; i < col.length; i++) {
    if (col[i].innerHTML === "X" || col[i].innerHTML === "O") {
      count++;
    }
  }
  if (count === 25) {
    alert("It's draw!");
    clearTable();
    counter = 0;
    ClearTimeout();
    clearWidth();
  }
}

function clearTable() {
  for (var i = 0; i < 25; i++) {
    col[i].innerHTML = "";
    col[i].style.backgroundColor = "rgb(255,255,255)";
    col[i].style.fontFamily = "Helvetica";
    col[i].style.fontSize = "10px";
  }
}
