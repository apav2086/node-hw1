const path = require("path");
const fs = require("fs/promises");
const { v4 } = require("uuid");

const contactsPath = path.resolve("db/contacts.json");


async function listContacts() {
  const contacts = JSON.parse(await fs.readFile(contactsPath));
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId.toString());
  if (!result) {
    return null;
  }
  return result;
}


async function removeContact(contactId) {
  const contacts = await listContacts();
  const newContacts = contacts.filter(({ id }) => id !== contactId.toString());
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return newContacts;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: v4(),
    name,
    email,
    phone,
  };
  const newContacts = [...contacts, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newContacts)); 
  return newContact;
}


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
