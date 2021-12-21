import { useState } from 'react';

export default function SingleNote(props) {
  const [collapse, setCollapse] = useState(false);

  function handleCollapse() {
    setCollapse(!collapse);
  }
  return (
    <div key={props.note.id}>
      <p>
        {props.note.notes}
        <button
          style={{ marginLeft: '2rem', color: 'red', border: 'none' }}
          onClick={props.handleDelete}
          id={props.note.id}
        >
          x
        </button>
        <button
          className="buttonGrades"
          style={{ border: 'none' }}
          onClick={handleCollapse}
        >
          {collapse ? '-' : '+'}
        </button>
        {collapse && (
          <input
            placeholder="update"
            style={{ border: 'none' }}
            type="text"
            value={props.value}
            id={props.note.id}
            onKeyPress={props.handleUpdateNote}
            onChange={e => props.setValue(e.target.value)}
          ></input>
        )}
      </p>
    </div>
  );
}
