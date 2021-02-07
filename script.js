let totval = 0;
//let players = [0,1,2]


let vals = [];
var turn = 0;

let numPlayers = 3;

function numPlayersFunc(){
  numPlayers = document.getElementById('numPlayers').value;
}


function startGame(){
  //vals = []; // create an empty array
  for (i=0; i<=numPlayers; i++){
    vals.push(11);

  }
  document.getElementById('Started').innerHTML = "Started. Playing with " + numPlayers + " players."
}

function returnPlayer(turn){
  player = turn % numPlayers;
  return player
}

function dropCoin() {
  player = returnPlayer(turn);
  turn+=1;
  totval += 1;
  vals[player] -= 1;
  showCoins();
  document.getElementById('total').innerHTML = totval;
  whoseTurnIsIt();
}


function takeCoins(){
  player = returnPlayer(turn);
  vals[player] += totval;
  totval = 0;
  showCoins();
  document.getElementById('total').innerHTML = totval;
}

function whoseTurnIsIt(){
  document.getElementById('turnDude').innerHTML = "It's player " + (turn%numPlayers+1) + " 's turn!";
}

function showCoins(){
  var scores ="", i;
  for (i=0; i<numPlayers; i++) {
    scores = scores + "<p> Player "+ (i + 1) + ", coins = " + vals[i] + "</p>";
  }
  document.getElementById("Coins").innerHTML = scores;
}
