const yargs = require("yargs");
const {addNote} = require("../utils/notes");

console.log(process.argv); // argv is the argument vector - it is an array which stores all the arguments which we type to the console 
console.log(yargs.argv);

const command = process.argv[2];

if (command == "add"){
    console.log("Adding new note:");
    addNote(yargs.argv.note);
} else if (command == "remove"){
    console.log("Removing note:");
} else if (command == "list"){
    console.log("All notes added are displayed below:");
} else {
    console.log("command not recognised");
};
