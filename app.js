//modules
const style = require('chalk')
const notes = require('./notes')
const arg = require('yargs')


//adding a note
arg.command({
    command: 'add',
    description: 'Adding a note!',
    builder: {
        title: {
            description: 'Title of note',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Content of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

//read a note
arg.command({
    command: 'read',
    description: 'Reading a note!',
    builder: {
        title: {
            description: 'Title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

//list a note
arg.command({
    command: 'list',
    description: 'List a note!',
    handler(){
        notes.listNotes();
    }
})

//remove a note
arg.command({
    command: 'remove',
    description: 'Remove a note!',
    builder: {
        title: {
            description: 'Title of note',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

arg.parse();