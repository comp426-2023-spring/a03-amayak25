

export function rps(shot) {

  let choicesRPS = ["rock", "paper", "scissors"];

  let opponent= choicesRPS[Math.floor(Math.random()* choicesRPS.length)];
   
  
  if (shot==null)
  {
    return {"player": choicesRPS[Math.floor(Math.random()* choicesRPS.length)]};
  }
  if (!choicesRPS.includes(shot)){
    console.error(`Error: ${shot}. is out of range`);
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
    }
    else{
    result = "lose";
    }
    return { 'player': shot, 'opponent': opponent, 'result': result };
  }
  
export function rpsls(shot) {

  let choicesRPSLS = ["rock", "paper", "scissors", "rock", "lizard", "spock"];
  
  let opponent=choicesRPSLS[Math.floor(Math.random()* choicesRPSLS.length)];
   
  
  if (shot==null)
  {
    return {"player": choicesRPSLS[Math.floor(Math.random()* choicesRPSLS.length)]};
  }
   shot=shot.toLowerCase();
  if (!choicesRPSLS.includes(shot)){
    console.error(`Error: ${shot}. is out of range`);
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
