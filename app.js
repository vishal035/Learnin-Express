const yargs =  require('yargs');
const chalk = require('chalk');
const validator = require('validator');
const notes = require('./notes');
const { argv } = require('yargs');

//Yargs 
yargs.version('2.0.45');


//Create Add Command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Add a Note",
            demandOption: true,
                type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
                type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Remove Command

yargs.command({
    command: 'remove',
    describe: "It's remove a note",
    builder: {
        title: 'Remove a note',
        demandOption: true,
        type: 'string'
    },
    handler(argv) {
        console.log(chalk.redBright("Title: "+ argv.title));
        notes.removeNote(argv.title);
    }
})

//List Command
yargs.command({
    command: 'list',
    describe: "Listing All Notes",
    builder: {
        title: 'List all notes'
    },handler() {
        console.log(chalk.rgb(15, 100, 204).bold('Listing all Notes....'))
    }
})


//Read Command

yargs.command({
    command: 'read',
    describe: "Read a specific note",
    builder: {
        title: 'Read a note',
        demandOption: true,
        type: 'string'
    },handler(argv) {
        console.log(chalk.blueBright("Title: "+ argv.title));
        console.log(chalk.blueBright("Here is your note"));
    }
})


yargs.parse();