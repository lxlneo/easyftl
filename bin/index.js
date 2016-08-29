var  program = require('commander');

program.version('0.0.1')
    .option("-f,--full",'show a full program')
    .option("-F,--fuck",'what a fuck man')
if(program.full){
    console.log("this is a full....");
}
if(program.fuck){
    console.log("this is a fuck....");
}