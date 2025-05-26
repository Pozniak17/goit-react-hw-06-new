import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

import { GlobalStyle } from "./GlobalStyle.styled";
import { Layout } from "./Layout.styled";

export default function App() {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
}
