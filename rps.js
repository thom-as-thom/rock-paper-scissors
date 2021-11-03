let computerwins = 0;
let playerwins = 0;
let ties = 0;

function computerPlay() {
    let ranNum = Math.random();
    let computerPlay =""
    if(ranNum<0.33){
    computerPlay += "scissors";
    }else if(ranNum<0.66){
    computerPlay += "paper";
    }else {
    computerPlay += "rock";
}
return computerPlay;
};
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay() 
    playerSelection = prompt("rock, paper or scissors?")
    switch(playerSelection.toLowerCase()){
    case computerSelection:
        alert("it's a tie")
        return 1
        break;
    case "scissors":
         if (computerSelection == "rock"){
            alert(`computer wins, ${computerSelection} beats ${playerSelection}`)
            return 0;
        }else {
            alert(`player wins, ${playerSelection} beats ${computerSelection}`);
            return 2
        }break;
    case "rock":
        if (computerSelection == "paper"){
            alert(`computer wins, ${computerSelection} beats ${playerSelection}`);
            return 0;
        }else {
            alert(`player wins, ${playerSelection} beats ${computerSelection}`);
            return 2;
        }break;
    case "paper":
        if (computerSelection == "scissors"){
            alert(`computer wins, ${computerSelection} beats ${playerSelection}`);
            return 0
        }else {
            alert(`player wins, ${playerSelection} beats ${computerSelection}`);
            return 2;
        }break;
    }
  }
function game(){
    let i = 0;
    let computerCount = 1;
    let playerCount = 1;
    let round = [];
    while (i<5){
    round[i] = playRound();
    i++;
    };
    round.sort();
    computerCount += round.lastIndexOf(0);
    round.reverse();
    playerCount += round.lastIndexOf(2);
    if(computerCount>playerCount){
        return alert(`computer wins ${computerCount} to ${playerCount}, ${5-computerCount-playerCount} ties`);
    }else if(computerCount == playerCount){
        return alert(`its a tie computer:${computerCount}, player:${playerCount}, ties: ${5-computerCount-playerCount}`);
    }else{
        return alert (`player wins ${playerCount} to ${computerCount}, ${5-computerCount-playerCount} ties `);
    };
}

function playRoundRock(playerSelection, computerSelection) {
    computerSelection = computerPlay() 
    playerSelection = "rock"
    switch(playerSelection.toLowerCase()){
    case computerSelection:
        document.getElementById('prompt').innerText = "it's a tie"
        ties += 1;
        document.getElementById('ties').innerText = ties
        return 1
        break;
    case "rock":
        if (computerSelection == "paper"){
            document.getElementById('prompt').innerText = `computer wins, ${computerSelection} beats ${playerSelection}`;
            computerwins += 1
            document.getElementById('computerwins').innerText = computerwins
            return 0;
        }else {
            document.getElementById('prompt').innerText = `player wins, ${playerSelection} beats ${computerSelection}`;
            playerwins +=1
            document.getElementById('playerwins').innerText = playerwins
            return 2;
        }break;
    }
  }
function playRoundPaper(playerSelection, computerSelection) {
    computerSelection = computerPlay() 
    playerSelection = "paper"
    switch(playerSelection.toLowerCase()){
    case computerSelection:
        document.getElementById('prompt').innerText = "it's a tie"
        ties += 1;
        document.getElementById('ties').innerText = ties
        return 1
        break;
    case "paper":
        if (computerSelection == "scissors"){
            document.getElementById('prompt').innerText = `computer wins, ${computerSelection} beats ${playerSelection}`;
            computerwins +=1
            document.getElementById('computerwins').innerText = computerwins
            return 0
        }else {
            document.getElementById('prompt').innerText = `player wins, ${playerSelection} beats ${computerSelection}`;
            playerwins +=1
            document.getElementById('playerwins').innerText = playerwins
            return 2;
        }break;
    }
  }
  function playRoundScissors(playerSelection, computerSelection) {
    computerSelection = computerPlay() 
    playerSelection = "scissors"
    switch(playerSelection.toLowerCase()){
    case computerSelection:
        document.getElementById('prompt').innerText = "it's a tie"
        ties += 1
        document.getElementById('ties').innerText = ties
        return 1
        break;
    case "scissors":
         if (computerSelection == "rock"){
            document.getElementById('prompt').innerText = `computer wins, ${computerSelection} beats ${playerSelection}`
            computerwins += 1
            document.getElementById('computerwins').innerText = computerwins
            return 0;
        }else {
            document.getElementById('prompt').innerText = `player wins, ${playerSelection} beats ${computerSelection}`;
            playerwins += 1
            document.getElementById('playerwins').innerText = playerwins
            return 2
        }break;
    }
  }
  