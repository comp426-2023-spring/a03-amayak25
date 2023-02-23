./bin/*-cli.js
#!/usr/bin/env node 
import minimist from 'minimist';
import fetch from 'node-fetch';

const args = minimist(process.argv.slice(2));

if (args[0] === '-h' || args[0] === '--help') {
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

if (args[0]== '-r' ||args[0]== '--rules')
{
  console.log('  Rules for Rock Paper Scissors:');
  console.log('- Scissors CUTS Paper');
  console.log('- Paper COVERS Rock');
  console.log('- Rock CRUSHES Scissors')
}


