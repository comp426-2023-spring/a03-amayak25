
import minimist from 'minimist';
import fetch from 'node-fetch';
export {rps,rpsls}
const args=minimist(process.argv.slice(2));

let choicesRPS = ["rock", "paper", "scissors"];
let choicesRPSLS = ["rock", "paper", "scissors", "rock", "lizard", "spock"];
  
function Computer()
{
   return choicesRPS[Math.floor(Math.random()* choicesRPS.length)];
    
}
function Computer2()
{
  
  return choicesRPSLS[Math.floor(Math.random()* choicesRPSLS.length)];
   
}

function playRPS(shot) {

  
  let playerRPS=shot? shot.toLowerCase(): Computer();
  let opponent=Computer();
  
  if (shot==null)
  {
    return {"player": random(choicesRPS)};
  }
  if (!choicesRPS.includes(playerRPS)){
    console.error(`Error: ${playerRPS}. is out of range`);
    return;
  } 
 
   let result;
  if (playerRPS === opponent) {
    result = "tie";
  } else if (
    (playerRPS=== "rock" && opponent === "scissors") ||
    (playerRPS === "paper" && opponent === "rock") ||
    (playerRPS=== "scissors" && opponent === "paper")) {
    result = "win";
    }
    else{
    result = "lose";
    }
    return { player: playerRPS, opponent: opponent, result: result };

  }
  


function playRPSLS(shot) {


  let playerRPSLS=shot? shot.toLowerCase(): Computer2();
  let opponent2=Computer2();
  
  if (shot==null)
  {
    return {"player": random(choicesRPSLS)};
  }
  if (!choicesRPSLS.includes(playerRPSLS)){
    console.error(`Error: ${playerRPSLS}. is out of range`);
    return;
  } 
  let result; 
   if (playerRPSLS === opponent2) {
    result = "tie";
  } else if ((playerRPSLS === "rock" && (opponent2 === "scissors" || opponent2 === "lizard")) ||
    (playerRPSLS === "paper" && (opponent2 === "rock" || opponent2 === "spock")) ||
    (playerRPSLS === "scissors" && (opponent2 === "paper" || opponent2 === "lizard")))
    {
    result = "win";
} else {
    result = "lose";
  }
    return { player: playerRPSLS, opponent: opponent2, result: result };
 

}

