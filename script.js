let totval = 0;
//let players = [0,1,2]


let vals = [];
var turn = 0;

let numPlayers = 3;
var playerNames = [];

function numPlayersFunc(){
  numPlayers = document.getElementById('numPlayers').value;
  namesFill();
}


function startGame(){
  //vals = []; // create an empty array
  for (i=0; i<=numPlayers; i++){
    vals.push(11);

  }
  getNames();
  console.log(vals);
  document.getElementById('Started').innerHTML = "Started. Playing with " + numPlayers + " players."
}

function returnPlayer(turn){
  player = turn % numPlayers;
  return player
}

function namesFill(){
  var playerNamesString ="", i;
  for (i=0; i<numPlayers; i++) {
    playerNamesString = playerNamesString + "<p>Player " + (i+1) + "</p><input type='text' id='p" + i + "'></input>";
  }
  document.getElementById("enterNames").innerHTML = playerNamesString;
}


function getNames(){
  for (i=0; i<numPlayers; i++){
    var wantedId = "p"+i;
    var wantedValue = document.getElementById(wantedId).value;
    playerNames.push(wantedValue);
  }
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
  document.getElementById('turnDude').innerHTML = "It's "+playerNames[returnPlayer(turn)] +  "'s turn!";
}

function showCoins(){
  var scores ="", i;
  for (i=0; i<numPlayers; i++) {
    scores = scores + "<p> " + playerNames[i] + ", coins = " + vals[i] + "</p>";
  }
  document.getElementById("Coins").innerHTML = scores;
}
