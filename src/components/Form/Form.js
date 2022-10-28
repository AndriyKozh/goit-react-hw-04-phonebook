import React, { useState } from 'react';
import { FormContact, FormLable, FormBtn, FormInput } from './Form.style';

const Form = ({ addContact }) => {
  const [data, setData] = useState({ name: '', number: '' });

  function handlContactInfo(ev) {
    ev.preventDefault();

    addContact(data);
    setData({ name: '', number: '' });
  }

  function handleInputChange(text, name) {
    setData({ ...data, [name]: text.target.value });
  }

  return (
    <FormContact>
      <h1>Phonebook</h1>
      <form onSubmit={handlContactInfo}>
        <FormLable>
          Name
          <FormInput
            // id={nameInputId}
            type="text"
            value={data.name}
            onChange={text => handleInputChange(text, 'name')}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLable>
        <FormLable>
          Number
          <FormInput
            // id={numberInputId}
            type="tel"
            value={data.number}
            onChange={text => handleInputChange(text, 'number')}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLable>
        <FormBtn type="submit">Add Contact</FormBtn>
      </form>
    </FormContact>
  );
};

export default Form;
