import { useEffect, useState } from 'react';

export default function SingleNote(props) {
  const [value, setValue] = useState('');

  function handleValue(e) {
    if (e.key === 'Enter') {
      props.handleUpdateNote(e);
      setValue('');
    }
  }

  return (
    <li className='note' key={props.note.id}>
      <div className="note__text">
        {props.note.notes}
        <button
          className="note__delete"
          onClick={props.handleDelete}
          id={props.note.id}
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
      ></input>
    </li>
  );
}
