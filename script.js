let totval = 0;
//let players = [0,1,2]
let cardNum = 0;
function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

let cardsPlayer = [];
let cardsUnshuffled = range(4,36);
let cards = cardsUnshuffled;
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let vals = [];
var turn = 0;

let numPlayers = 3;
var playerNames = [];

buttonstring = "<button onclick='dropCoin()'>Drop coin</button>";
document.getElementById('dropCoinButton').innerHTML=buttonstring;

function numPlayersFunc(){
  numPlayers = document.getElementById('numPlayers').value;
  namesFill();
}

function showCard(){
  document.getElementById('currentCard').innerHTML = "<p style='font-size:30px'>Current card: <b>" + cards[cardNum] + "</b></p>";
}

function startGame(){
  //vals = []; // create an empty array
  for (i=0; i<=numPlayers; i++){
    vals.push(11);
    cardsPlayer.push([]);

  }
  getNames();
  cards = shuffle(cardsUnshuffled);
  console.log(cards);
  document.getElementById('Started').innerHTML = "Started. Playing with " + numPlayers + " players."
  showCard();
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
  testZeroCoins();
  showCard();
}


function takeCoins(){
  player = returnPlayer(turn);
  takeCard(player);
  vals[player] += totval;
  totval = 0;
  showCoins();
  document.getElementById('total').innerHTML = totval;
  testZeroCoins();
  cardNum++;
  showCard();

}

function takeCard(player){
  cardsPlayer[player].push(cards[cardNum]);
}

function whoseTurnIsIt(){
  document.getElementById('turnDude').innerHTML = "It's "+playerNames[returnPlayer(turn)] +  "'s turn!";
}

function showCoins(){
  var scores ="", i;
  for (i=0; i<numPlayers; i++) {
    scores = scores + "<p> " + playerNames[i] + ", coins = " + vals[i] + ", cards = " + cardsPlayer[i].sort(function(a, b) {return a - b}) + " </p>";
  }
  document.getElementById("Coins").innerHTML = scores;
}

function testZeroCoins(){
  if(vals[player]==0){
    document.getElementById('dropCoinButton').innerHTML="<button onclick='dropCoin()' disabled>Drop coin</button>";
  }
    else {document.getElementById('dropCoinButton').innerHTML="<button onclick='dropCoin()'>Drop coin</button>";

  }
}
//todo finish at certain turn
