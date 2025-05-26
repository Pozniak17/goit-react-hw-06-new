import { useDispatch, useSelector } from "react-redux";
import { ContactItem, Button } from "./ContactList.styled";
import { deleteContact } from "../redux/actions";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name.toLowerCase());

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters)
  );

  console.log(visibleContacts);
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <p>
            {name}: <span>{number}</span>
            <Button onClick={() => handleDelete(id)}>Delete</Button>
          </p>
        </ContactItem>
      ))}
    </ul>
  );
};
