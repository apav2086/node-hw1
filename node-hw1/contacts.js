const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.join(__dirname, 'db/contacts.json');
console.log(contactsPath);
 
const read = fs.readFile(contactsPath).then(data => JSON.parse(data));
async function listContacts() {
  const data = await read;
  console.table(data);
}

async function getContactById(contactId) {
  const data = await read;
  const contact = data.find(item => item.id === contactId);
  if (contact) {
    console.table(contact);
  } else {
    console.log('There is no contact with that ID \n');
  }
}

async function removeContact(contactId) {
  const data = await read;
  const newData = data.filter(item => item.id !== contactId);
  fs.writeFile('db/contacts.json', JSON.parse(newData)).then(() =>
    console.log('User was deleted'));
}

async function addContact(name, email, phone) {
  const data = await read;
  const newContact = {
    name: '',
    email: '',
    phone: ''
  };
  data.push(newContact);
  fs.appendFile('db/contacts.json', JSON.parse(newContact)).then(() =>
    console.table(data));
}

module.exports = { listContacts, getContactById, removeContact, addContact };