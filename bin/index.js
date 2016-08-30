var program = require('commander');
var colors = require('colors');

var template = require('../lib/template.js')

program.command('init')
    .option('-f,--ftl', 'init a project with freemarkers')
    .option('--hbs', 'init a project with handerbars')
    .action(function (program) {
        if (program.freemarkers) {
            console.log('init-------------------'.blue);
            console.log('template:handerbars'.blue);
            template.hbs();
        } else {
            console.log('init-------------------'.blue);
            console.log('template:freemarkers'.blue);
            template.ftl();
        }

    })