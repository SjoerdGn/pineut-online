let totval = 0;
//let players = [0,1,2]


let vals = [];
var turn = 0;

let numPlayers = 3;

let players = [];

function numPlayersFunc(){
  numPlayers = document.getElementById('numPlayers').value;
  console.log(numPlayers)
}


function startGame(){
  console.log(numPlayers);
  players = []; // create an empty array
  for (i = 0; i < numPlayers; i++){
    players.push(i);
  }//[...Array(numPlayers).keys()];
  console.log(players);
  //vals = []; // create an empty array
  for (var i in players){
    vals.push(11
    );

  }
  console.log(vals);
}

for (var player in vals){
  document.getElementById(player).innerHTML = vals[player];
}
document.getElementById('total').innerHTML = totval;

function returnPlayer(turn){
  player = players[turn % numPlayers];
  return player
}

function dropCoin() {
  player = returnPlayer(turn);
  turn+=1;
  totval += 1;
  vals[player] -= 1;
  console.log(player);
  console.log(players);
  document.getElementById(player).innerHTML = vals[player];
  document.getElementById('total').innerHTML = totval;
}


function takeCoins(){
  player = returnPlayer(turn);
  vals[player] += totval;
  totval = 0;
  document.getElementById(player).innerHTML = vals[player];
  document.getElementById('total').innerHTML = totval;
}
/*
var x ="", i;
for (i=1; i<=6; i++) {
  x = x + "<h" + i + ">Heading " + i + "</h" + i + ">";
}
document.getElementById("demo").innerHTML = x;


*/
