This project is a refactored version of the "Contact Book" application as part of the GoIT React course. The application now uses Redux Toolkit for state management instead of local React state. Below is a detailed description of the project's structure and features.

Project Description: 
Vite
The project is built using Vite, a fast build tool that provides a development server, builds your code for production, and offers other essential features for modern web development.

Redux Toolkit
Redux Toolkit is used to manage the global state of the application. The project includes two main slices:

Contacts Slice (contactsSlice.js):

Manages the list of contacts.
Provides actions to add and delete contacts.
Selectors to access contacts from the state.
Filters Slice (filtersSlice.js):

Manages the filter value.
Provides an action to change the filter value.
Selectors to access the filter value from the state.
Redux Persist
Redux Persist is used to save the contacts state to the local storage, ensuring that the data persists between page reloads.
