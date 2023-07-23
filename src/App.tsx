import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './App.css'
import { store } from './redux/store';
import NoteList from './components/notes/list.note';

function App() {
  return (
    <>
      <Provider store={store}>
        <NoteList />
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
