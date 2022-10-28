import Contact from 'components/Contact/Contact';
const Phonebook = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <div>
      {contacts.map((contact, index) => {
        return (
          <Contact
            key={index}
            id={contact.id}
            name={contact.text.name}
            number={contact.text.number}
            deleteContact={deleteContact}
          />
        );
      })}
    </div>
  );
};

export default Phonebook;
