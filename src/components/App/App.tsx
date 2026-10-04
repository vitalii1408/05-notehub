import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchNotes } from '../../services/noteService';
import NoteList from '../NoteList/NoteList';
import css from './App.module.css';

export default function App() {
  const [page] = useState(1);

  const { data } = useQuery({
    queryKey: ['notes', page],
    queryFn: () => fetchNotes({ page }),
    placeholderData: keepPreviousData,
  });

  const notes = data?.notes ?? [];

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* Компонент SearchBox */}
        {/* Пагінація */}
        {/* Кнопка створення нотатки */}
      </header>
      {notes.length > 0 && <NoteList notes={notes} />}
    </div>
  );
}
