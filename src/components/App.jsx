// import { useDispatch } from "react-redux";
// import { fetchContacts } from "../redux/contactSlice";
// import { selectError, selectIsLoading } from "../redux/selectors";
import ContactForm from "./ContactForm/form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>      
  )
}


