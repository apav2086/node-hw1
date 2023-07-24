// Importing the "commander" library, which helps in creating command-line interfaces
const { program, Command } = require("commander");

// Importing the contactsActions module from the "contacts.js" file
const contactsActions = require("./contacts");

// Defining options for the command-line interface using "commander"
program
  .option("-a, --action <type>", "choose action") // Option to specify the action type (list, get, add, remove)
  .option("-i, --id <type>", "user id") // Option to specify the user ID
  .option("-n, --name <type>", "user name") // Option to specify the user name
  .option("-e, --email <type>", "user email") // Option to specify the user email
  .option("-p, --phone <type>", "user phone"); // Option to specify the user phone number

// Parsing the command-line arguments provided during the execution of the program
program.parse(process.argv);
