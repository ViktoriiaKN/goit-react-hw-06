import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import style from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <ul className={style.contactList}>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;