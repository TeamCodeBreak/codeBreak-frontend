import { useState } from 'react';
import './notes.scss';
import Paper from '@mui/material/Paper';


export default function SingleNote(props) {
  const [value, setValue] = useState('');

  function handleValue(e) {
    if (e.key === 'Enter') {
      props.handleUpdateNote(e);
      setValue('');
    }
  }

  return (
    <Paper
      id="singleNotepad"
      elevation={6}
      className="note"
      key={props.note.id}
      data-testid={props.note.notes}
    >
      <div className="note__text">
        {props.note.notes}
        <button
          className="note__delete"
          onClick={props.handleDelete}
          id={props.note.id}
          data-testid="delete-button"
        >
          x
        </button>
      </div>
      <input
        placeholder="update"
        className="note_editbox"
        type="text"
        value={value}
        id={props.note.id}
        onKeyPress={handleValue}
        onChange={e => setValue(e.target.value)}
        data-testid="edit"
      ></input>
    </Paper>
  );
}
