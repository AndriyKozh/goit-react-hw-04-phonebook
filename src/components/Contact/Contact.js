import { PhonebookBlock, PhoneBookDot, PhoneBookBtn } from './Contacts.style';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <PhonebookBlock>
      <PhoneBookDot></PhoneBookDot>
      <p>
        {name} {number}
      </p>
      <PhoneBookBtn type="button " onClick={() => deleteContact(id)}>
        Delete
      </PhoneBookBtn>
    </PhonebookBlock>
  );
};

export default Contact;
