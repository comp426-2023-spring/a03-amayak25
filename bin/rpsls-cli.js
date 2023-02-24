#!/usr/bin/env node 
import minimist from 'minimist';
import { rpsls } from "../lib/rpsls.js";


const args = minimist(process.argv.slice(2));

function help()
{
  console.log('Usage: node-rpsls [SHOT]\n');
  console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n');
  console.log('Options:');
  console.log('-h, --help  display this help message and exit');
  console.log('-r, --rules display the rules and exit\n');
  console.log('Examples:');
  console.log('node-rpsls                  Return JSON with single player RPSLS result.');
  console.log('                             e.g. {"player":"rock"}');
  console.log('node-rpsls rock             Return JSON with results for RPSLS played against a simulated opponent.');
  console.log('                             e.g {"player":"rock","opponent":"Spock","result":"lose"}');

}

function rules() 
  {
    console.log('Rules for Lizard-Spock Expansion of Rock Paper Scissors:');
    console.log(' Scissors CUTS Paper');
    console.log(' Paper COVERS Rock');
    console.log(' Rock CRUSHES Lizard');
    console.log(' Lizard POISONS Spock');
    console.log(' Spock SMASHES Scissors');
    console.log(' Scissors DECAPITATES Lizard');
    console.log(' Lizard EATS Paper');
    console.log(' Paper DISPROVES Spock');
    console.log(' Spock VAPORIZES Rock');
    console.log(' Rock CRUSHES Scissors');
  
}
if (args.h || args.help) 
{
  help();
  process.exit(0);
}

else if (args.r ||args.rules)
{
 rules();
 process.exit(0);
}

else{
  let shot=args._[0]; 
      try
      {
       console.log(JSON.stringify(rpsls(shot)));
      }
   catch(error) {
    console.error(`${shot} is out of range`);
    help();
    rules();
    proccess.exit(1);
  }
}
