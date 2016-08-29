var  program = require('commander');
var  initProject = require('../lib/initProject.js');

program.version('0.0.1')
    .option("-f,--full",'show a full program')
    .option("-F,--fuck",'what a fuck man')
    .parse(process.argv);

if(program.full){
    console.log("this is a full....");
    initProject.full();
}
if(program.fuck){
    console.log("this is a fuck....");
}