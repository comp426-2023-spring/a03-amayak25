
import minimist from 'minimist';
import fetch from 'node-fetch';

const args=minimist(process.argv.slice(2));



function playRPS(player = null, opponent = null) {
  if (args.h)
  {
  console.log(' Usage: node-rps [SHOT]');
  console.log('Play Rock Paper Scissors (RPS)');
  console.log('-h, --help      display this help message and exit');
  console.log('-r, --rules     display the rules and exit');
  console.log('Examples:');
  console.log('node-rps        Return JSON with single player RPS result.');
  console.log('              e.g. {"player":"rock"} ');
  console.log('node-rps rock   Return JSON with results for RPS played against a simulated opponent.');
  console.log('             e.g {"player":"rock","opponent":"scissors","result":"win"}');
  process.exit(0);
  }
  
  if(args.r)
  {
    console.log('Rules for Rock Paper Scissors:');
    console.log(' - Scissors CUTS Paper');
    console.log('- Paper COVERS Rock');
    console.log(' - Rock CRUSHES Scissors');
  }


  const choices = ["rock", "paper", "scissors"];
  if (player==null || opponent==null)
  {
    return {"player":"rock"};
  }
  if (!choices.includes(player) || !choices.includes(opponent)) {
    console.error(`Error: ${choices}. is out of range`);
    return;
  } 
 
   let result;
  if (player === opponent) {
    result = "tie";
  } else if (
    (player === "rock" && opponent === "scissors") ||
    (player === "paper" && opponent === "rock") ||
    (player === "scissors" && opponent === "paper")) {
    result = "win";
    }
    else{
    result = "lose";
    }
    return { player: player, opponent: opponent, result: result };

  }
  


function playRPSLS(player = null, opponent = null) {
  
  if (args.h)
  {
  console.log(' Usage: node-rpsls [SHOT]');
  console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!');
  console.log('-h, --help      display this help message and exit');
  console.log('-r, --rules     display the rules and exit');
  console.log('Examples:');
  console.log('node-rpsls        Return JSON with single player RPSLS result.');
  console.log('              e.g. {"player":"rock"} ');
  console.log('node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.');
  console.log('             e.g {"player":"rock","opponent":"Spock","result":"loose"}');
  process.exit(0);
  }
  if (args.r)
  {
    console.log('Rules for the Lizard-Spock Espansion of Rock Paper Scissors:');
   console.log(' - Scissors CUTS Paper');
   console.log(' - Paper COVERS Rock');
   console.log(' - Rock SMOOSHES Lizard');
    console.log('- Lizard POISONS Spock');
   console.log(' - Spock SMASHES Scissors');
   console.log(' - Scissors DECAPITATES Lizard');
   console.log(' - Lizard EATS Paper');
    console.log('- Paper DISPROVES Spock');
    console.log('- Spock VAPORIZES Rock');
    console.log('- Rock CRUSHES Scissors");')
  }
  
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  if (player==null || opponent==null)
  {
    return {"player":"rock"};
  }
  if (!choices.includes(player) || !choices.includes(opponent)) {
    console.error(`Error:${choices} is out of range`);
    return;
  } 
  let result; 
   if (player === opponent) {
    result = "tie";
  } else if ((player === "rock" && (opponent === "scissors" || opponent === "lizard")) ||
    (player === "paper" && (opponent === "rock" || opponent === "spock")) ||
    (player === "scissors" && (opponent === "paper" || opponent === "lizard")))
    {
    result = "win";
} else {
    result = "lose";
  }
    return { player: player, opponent: opponent, result: result };

  
   
  
}
/*

// Function to test the rock-paper-scissors game
function testRPS() {
  // Test 1: player wins
  const test1 = playRPS('rock', 'scissors');
  console.log(test1); // Expected output: { player: 'rock', opponent: 'scissors', result: 'win' }

  // Test 2: player loses
  const test2 = playRPS('paper', 'scissors');
  console.log(test2); // Expected output: { player: 'paper', opponent: 'scissors', result: 'lose' }

  // Test 3: tie
  const test3 = playRPS('rock', 'rock');
  console.log(test3); // Expected output: { player: 'rock', opponent: 'rock', result: 'tie' }

  // Test 4: invalid argument
  const test4 = playRPS('rock', 'hammer');
  console.log(test4); // Expected output: Error message
  //Test5: null arguments
  const test5= playRPS(" ", " ");
  console.log(test5);
}

// Function to test the rock-paper-scissors-lizard-spock game
function testRPSLS() {
  // Test 1: player wins
  const test1 = playRPSLS('spock', 'scissors');
  console.log(test1); // Expected output: { player: 'spock', opponent: 'scissors', result: 'win' }

  // Test 2: player loses
  const test2 = playRPSLS('rock', 'spock');
  console.log(test2); // Expected output: { player: 'rock', opponent: 'spock', result: 'lose' }

  // Test 3: tie
  const test3 = playRPSLS('lizard', 'lizard');
  console.log(test3); // Expected output: { player: 'lizard', opponent: 'lizard', result: 'tie' }

  // Test 4: invalid argument
  const test4 = playRPSLS('rock', 'hammer');
  console.log(test4); // Expected output: Error message
}
   //Test5: null arguments
   const test5= playRPSLS(" ", " ");
   console.log(test5);

// Run the test functions
testRPS();
testRPSLS();

*/
