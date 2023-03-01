#!/usr/bin/env node 
import minimist from 'minimist';
import { rpsls } from "../lib/rpsls.js";


const args = minimist(process.argv.slice(2));

export function help()
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

export function rules() 
  {
    console.log('Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors');
  
}

if (args.h || args.help) 
{
  help();
}

else if (args.r || args.rules)
{
  rules();
  process.exit(0);
}

else {
  try {
    let result = rpsls(args._[0]);
    console.log(JSON.stringify(result));
  } catch (error) {
    console.error(`${args._[0]} is out of range.`);
   help();
    rules();
  }
}
