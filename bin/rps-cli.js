#!/usr/bin/env node 

import minimist from 'minimist';


import { rps } from "../lib/rpsls.js";


const args = minimist(process.argv.slice(2));
function help()
{
  console.log('Usage: node rps.js [SHOT]\n');
  console.log('Play Rock Paper Scissors (RPS)\n');
  console.log('Options:');
  console.log('-h, --help  display this help message and exit');
  console.log('-r, --rules display the rules and exit\n');
  console.log('Examples:');
  console.log('node rps.js                  Return JSON with single player RPS result.');
  console.log('                             e.g. {"player":"rock"}');
  console.log('node rps.js rock             Return JSON with results for RPS played against a simulated opponent.');
  console.log('                             e.g {"player":"rock","opponent":"scissors","result":"win"}');
  process.exit(0);
}

function rules()
{
  console.log('  Rules for Rock Paper Scissors:');
  console.log('- Scissors CUTS Paper');
  console.log('- Paper COVERS Rock');
  console.log('- Rock CRUSHES Scissors')
}

if (args.h || args.help) 
{
  help();
}

else if (args.r || args.rules)
{
  rules();
}
else{
  let result=rps(args._[0]); 
      try
      {
       console.log(JSON.stringify(result));
      }
   catch(error) {
    console.error(`${result} is out of range`);
    help();
    rules();
    proccess.exit(1);
  }
}
