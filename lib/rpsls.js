export{rps,rpsls}
function playRPS(shot) {

  let choicesRPS = ["rock", "paper", "scissors"];

  let opponent= choicesRPS[Math.floor(Math.random()* choicesRPS.length)];
   
  
  if (shot==null)
  {
    return {"player": choicesRPS[Math.floor(Math.random()* choicesRPS.length)]};
  }
  if (!choicesRPS.includes(shot)){
    console.error(`Error: ${shot}. is out of range`);
    return;
  } 
 
   let result;
  if (shot === opponent) {
    result = "tie";
  } else if (
    (shot=== "rock" && opponent === "scissors") ||
    (shot === "paper" && opponent === "rock") ||
    (shot=== "scissors" && opponent === "paper")) {
    result = "win";
    }
    else{
    result = "lose";
    }
    return { 'player': shot, 'opponent': opponent, 'result': result };

  }
  


function playRPSLS(shot) {

  let choicesRPSLS = ["rock", "paper", "scissors", "rock", "lizard", "spock"];
  
  let opponent=choicesRPSLS[Math.floor(Math.random()* choicesRPSLS.length)];
   
  
  if (shot==null)
  {
    return {"player": choicesRPSLS([Math.floor(Math.random()* choicesRPSLS.length)])};
  }
  if (!choicesRPSLS.includes(shot)){
    console.error(`Error: ${shot}. is out of range`);
    return;
  } 
  let result; 
   if (shot === opponent) {
    result = "tie";
  } else if ((shot === "rock" && (opponent === "scissors" || opponent === "lizard")) ||
    (shot === "paper" && (opponent === "rock" || opponent === "spock")) ||
    (shot === "scissors" && (opponent === "paper" || opponent === "lizard")))
    {
    result = "win";
} else {
    result = "lose";
  }
    return { 'player': shot, 'opponent': opponent, 'result': result };
 

}
/*
function test() {
  // Test playRPS function
  console.log(playRPS(null)); // Expected output: { "player": <random choice> }
  console.log(playRPS("rock")); // Expected output: { "player": "rock", "opponent": <random choice>, "result": "tie/win/lose" }
  console.log(playRPS("invalid")); // Expected output: Error message and undefined

  // Test playRPSLS function
  console.log(playRPSLS(null)); // Expected output: { "player": <random choice> }
  console.log(playRPSLS("rock")); // Expected output: { "player": "rock", "opponent": <random choice>, "result": "tie/win/lose" }
  console.log(playRPSLS("invalid")); // Expected output: Error message and undefined
}
test();
*/
