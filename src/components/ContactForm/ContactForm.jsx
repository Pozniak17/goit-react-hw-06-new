import {
  FormContainer,
  FormLabel,
  FormInput,
  Button,
} from "./ContactForm.styled";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions";

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSumbit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = event.target;
    console.log(name.value, number.value);

    console.log(form.elements.name.value);

    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );

    form.reset();
  };

  return (
    <FormContainer onSubmit={handleSumbit}>
      <FormLabel>
        Name
        <FormInput
          // value={name}
          // onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
      </FormLabel>

      <FormLabel>
        Number
        <FormInput
          // value={number}
          // onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Nubmer"
        />
      </FormLabel>

      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};
