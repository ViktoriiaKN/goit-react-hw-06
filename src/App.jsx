import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";


function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;