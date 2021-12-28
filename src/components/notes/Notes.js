import './notes.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth';
import SingleNote from './SingleNote';
import TextField from '@mui/material/TextField';
import { ThemeContext } from '../../context/theme';

const url = process.env.REACT_APP_URL;
export default function Notes() {
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState('');
  const [updateValue, setUpdateValue] = useState('');

  const [run, setRun] = useState(true);

  useEffect(() => {
    getNotes();
  }, [auth.token]);

  useEffect(() => {
    if (auth.token) {
      getNotes();
    }
  }, [run]);

  async function getNotes() {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    let response = await axios.get(`${url}/notes`, config);
    let data = response.data;
    let sortData = data.sort((a, b) => {
      return a.id - b.id;
    });

    console.log('sort', sortData);
    setNotes(data);
  }

  async function handleAddNote(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      let config = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
      let obj = {
        notes: value,
      };
      await axios.post(`${url}/notes`, obj, config);
      setRun(!run);
      setValue('');
    }
  }
  async function handleUpdateNote(e) {
    e.preventDefault();
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    let obj = {
      notes: e.target.value,
    };


    await axios.put(`${url}/notes/${e.target.id}`, obj, config);

    setRun(!run);
    setUpdateValue('');
  }

  async function handleDelete(e) {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };

   await axios.delete(`${url}/notes/${e.target.id}`, config);

    setRun(!run);
  }
  return (
    <>
      <div className={theme.mode}>
        <div id="notesCont">
          <div id="notePadTitle">
            <h2>Write it out.</h2>
            <TextField
              label="Enter your thoughts!"
              variant="outlined"
              className="input__notes"
              type="text"
              value={value}
              onKeyPress={handleAddNote}
              onChange={e => setValue(e.target.value)}
              data-testid="input"
            />
          </div>
          <div className="notes__parent" data-testid="notes">
            {notes[0] &&
              notes.map(note => (
                <SingleNote
                  data-testid={note}
                  note={note}
                  handleDelete={handleDelete}
                  handleUpdateNote={handleUpdateNote}
                  updateValue={updateValue}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
