/**
 * Created by johnwozniak on 1/5/16.
 */

var argv = require('yargs').argv;

//pull in the first command and store as a variable
var command = argv._[0];

console.log(argv);

if(command === 'hello' && typeof argv.name !== 'undefined'){
    console.log('Hello!' + argv.name + '!' + argv.last + '!');
}else if(command === 'hello')
{
    console.log('hello world');
}

