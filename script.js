var politicianResults = function(name, partyColor){
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;


  politician.tallyUpTotalVotes = function(){

  this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++){
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }

};

return politician;

};

var beyonce = politicianResults("Beyonce Knowles", [245, 141, 136]);
var rihanna = politicianResults("Rihanna Fenty", [132, 17, 11]);



beyonce.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

rihanna.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

/*Florida recount*/
beyonce.electionResults[9] = 1;
rihanna.electionResults[9] = 28;

/*California recount*/
beyonce.electionResults[4] = 17;
rihanna.electionResults[4] = 38;

/*Texas recount*/
beyonce.electionResults[43] = 11;
rihanna.electionResults[43] = 27;




var setStateResults = function(state) {

   theStates[state].winner = null;

   if (beyonce.electionResults[state] > rihanna.electionResults[state]){theStates[state].winner = beyonce;}
   else if (beyonce.electionResults[state] < rihanna.electionResults[state]){theStates[state].winner = rihanna;}

 var stateWinner = theStates[state].winner;
   if (theStates[state].winner !== null){theStates[state].rgbColor = stateWinner.partyColor;}
   else {theStates[state].rgbColor = [11, 32, 57];}

 var stateInfoTable = document.getElementById('stateResults');
   var header = stateInfoTable.children[0];
   var body = stateInfoTable.children[1];

   var stateName = header.children[0].children[0];
   var abbrev = header.children[0].children[1];
   var candidate1Name = body.children[0].children[0];
   var candidate2Name = body.children[1].children[0];
   var candidate1Results = body.children[0].children[1];
   var candidate2Results = body.children[1].children[1];
   var winnersName = body.children[2].children[1];

   stateName.innerText = theStates[state].nameFull;

   abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

   candidate1Name.innerText = beyonce.name;
   candidate2Name.innerText = rihanna.name;

   candidate1Results.innerText = beyonce.electionResults[state];
   candidate2Results.innerText = rihanna.electionResults[state];

   if (theStates[state].winner === null){
     winnersName.innerText = "DRAW";}
   else { winnersName.innerText = theStates[state].winner.name;}

};


beyonce.tallyUpTotalVotes();
rihanna.tallyUpTotalVotes();

var winner = "???";
if (beyonce.totalVotes > rihanna.totalVotes){
  winner = beyonce.name;}
else if (rihanna.totalVotes > beyonce.totalVotes){
  winner = rihanna.name;}
else {
  winner = "Draw";}



var table = document.getElementById('countryResults');

table.children[0].children[0].children[0].innerText = beyonce.name;
table.children[0].children[0].children[1].innerText = beyonce.totalVotes;
table.children[0].children[0].children[2].innerText = rihanna.name;
table.children[0].children[0].children[3].innerText = rihanna.totalVotes;
table.children[0].children[0].children[5].innerText = winner;
