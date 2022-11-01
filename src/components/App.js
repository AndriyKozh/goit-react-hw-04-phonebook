import Form from './Form/Form';
import Filter from './Filter/Filter';
import { AppBlock } from './App.style';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import Phonebook from './Phonebook/Phonebook';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      return JSON.parse(contacts);
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [filter]);

  function addContactGandler(text) {
    const newContact = {
      text: text,
      isComplet: false,
      id: uuidv4(),
      filters: '',
    };
    if (
      contacts.some(
        contact => contact.text.name.toLowerCase() === text.name.toLowerCase()
      )
    ) {
      return alert(`${text.name} is already in contacts`);
    }
    setContacts([...contacts, newContact]);
  }
  function deleteContact(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const filterText = e => setFilter(e.currentTarget.value.toLowerCase());

  const filtrContacts = contacts.filter(contact =>
    contact.text.name.toLowerCase().includes(filter)
  );

  return (
    <AppBlock className="App">
      <Form addContact={addContactGandler} />
      <Filter handleFilter={filterText} />
      {contacts.length > 0 ? (
        <Phonebook contacts={filtrContacts} deleteContact={deleteContact} />
      ) : (
        'you do not have any contacts'
      )}
    </AppBlock>
  );
};
