const contactsActions = require("./contacts");
const argv = require("yargs").argv;
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsActions.listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await contactsActions.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const addContact = await contactsActions.addContact(name, email, phone);
      console.table(addContact);
      break;

    case "remove":
      const removeContact = await contactsActions.removeContact(id);
      console.table(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const start = async (argv) => {
  try {
    await invokeAction(argv);
  } catch (error) {
    console.log(error);
  }
};

start(argv);
