
export function rps(shot) {

  let choicesRPS = ["rock", "paper", "scissors"];

  let opponent= choicesRPS[Math.floor(Math.random()* choicesRPS.length)];
   
  
  if (shot==null)
  {
    return {"player": choicesRPS[Math.floor(Math.random()* choicesRPS.length)]};
  }
  if (!choicesRPS.includes(shot)){
    throw new Error(`${shot} is out of range`);
    
    process.exit(1);
  } 
 shot=shot.toLowerCase();
   let result;
  if (shot === opponent) {
    result = "tie";
  } else if (
    (shot=== "rock" && opponent === "scissors") ||
    (shot === "paper" && opponent === "rock") ||
    (shot=== "scissors" && opponent === "paper")) {
    result = "win";
     return { 'player': shot, 'opponent': opponent, 'result': result };
    }
    else{
    result = "lose";
     return { 'player': shot, 'opponent': opponent, 'result': result };
    }
   
  }
  
export function rpsls(shot2) {

  let choicesRPSLS = ["rock", "paper", "scissors", "rock", "lizard", "spock"];
  
  let opponent2=choicesRPSLS[Math.floor(Math.random()* choicesRPSLS.length)];
   
  
  if (shot==null)
  {
    return {"player": choicesRPSLS[Math.floor(Math.random()* choicesRPSLS.length)]};
  }
   
  if (!choicesRPSLS.includes(shot)){
    throw new Error(`${shot} is out of range`);
    
   // process.exit(1);
  } 
  shot=shot.toLowerCase();
  let result; 
 if (shot === opponent2) {
    result = "tie";
  } 
  else if ((shot === "rock" && (opponent2 === "scissors" || opponent2 === "lizard")) ||
    (shot === "paper" && (opponent2 === "rock" || opponent2 === "spock")) ||
    (shot === "scissors" && (opponent2 === "paper" || opponent2 === "lizard")))
    {
    result = "win";
      return { 'player': shot, 'opponent': opponent2, 'result': result };
    
} else {
  
    result = "lose";
      return { 'player': shot, 'opponent': opponent2, 'result': result };
    
  }
 
    
 

}
/*
function test() {
  // Test playRPS function
  console.log(rps(null)); // Expected output: { "player": <random choice> }
  console.log(rps("rock")); // Expected output: { "player": "rock", "opponent": <random choice>, "result": "tie/win/lose" }
  console.log(rps("invalid")); // Expected output: Error message and undefined

  // Test playRPSLS function
  console.log(rpsls(null)); // Expected output: { "player": <random choice> }
  console.log(rpsls("rock")); // Expected output: { "player": "rock", "opponent": <random choice>, "result": "tie/win/lose" }
  console.log(rpsls("invalid")); // Expected output: Error message and undefined
}
test();
*/
