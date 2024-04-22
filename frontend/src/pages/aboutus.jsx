import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../components/NotesList';
import Search from '../components/Search';
import Header from '../components/Header';
import './aboutus.css';

const Aboutus = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    return savedNotes || [
      {
        id: nanoid(),
        text: 'This is my first note!',
        date: '15/04/2021',
      },
      {
        id: nanoid(),
        text: 'This is my second note!',
        date: '21/04/2021',
      },
      {
        id: nanoid(),
        text: 'This is my third note!',
        date: '28/04/2021',
      },
      {
        id: nanoid(),
        text: 'This is my new note!',
        date: '30/04/2021',
      },
    ];
  });
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
    };
    setNotes(prevNotes => {
        const newNotes = [...prevNotes, newNote];
        localStorage.setItem('react-notes-app-data', JSON.stringify(newNotes));
        return newNotes;
    });
};


const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
  localStorage.setItem('react-notes-app-data', JSON.stringify(newNotes));
};


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='ct'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default Aboutus;
