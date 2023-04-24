import { useSelector } from "react-redux";
import { getContacts, getContactFilter } from 'redux/selectors';
import ItemContact from "../ItemContact/ItemContact";
import {List} from './ContactList.styled';

const ContactList = () => {
  //отримуємо масив контактів з store
  const contacts = useSelector(getContacts);

  //отримуємо дані фільтру з store
  const contactFilter = useSelector(getContactFilter);
  
  const visibleContacts = contactFilter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(contactFilter.toLowerCase())
      )
    : contacts;

  return (
    <List>
      {visibleContacts.map(({id, name, number}) => {
        return (
        <ItemContact key={id} id={id} name={name}number={number} />
        )
      })}    
    </List>
  )
}
export default ContactList;