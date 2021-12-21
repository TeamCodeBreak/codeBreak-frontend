import './notes.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth';
import SingleNote from './SingleNote';

const url = process.env.REACT_APP_URL;
export default function Notes() {
  const auth = useContext(AuthContext);
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
    console.log(auth.token);
    let response = await axios.get(`${url}/notes`, config);

    console.log(response);
    setNotes(response.data);
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
      console.log(auth.token);
      let response = await axios.post(`${url}/notes`, obj, config);
      setRun(!run);
      setValue('');
    }
  }
  async function handleUpdateNote(e) {
    console.log('trigger');
    if (e.key === 'Enter') {
      e.preventDefault();
      let config = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
      console.log('updateValue---', updateValue);
      let obj = {
        notes: updateValue,
      };
      console.log(auth.token);
      let response = await axios.put(
        `${url}/notes/${e.target.id}`,
        obj,
        config
      );
      console.log('update-------', response);
      setRun(!run);
      setUpdateValue('');
    }
  }

  async function handleDelete(e) {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    console.log('key--', e.target.id);
    let response = await axios.delete(`${url}/notes/${e.target.id}`, config);

    console.log('response', response.data.notes);
    setRun(!run);
  }
  console.log(value);
  console.log('token---', auth.token);
  console.log('note------', notes);
  return (
    <>
      {notes[0] &&
        notes.map(note => (
          <SingleNote
            note={note}
            handleDelete={handleDelete}
            handleUpdateNote={handleUpdateNote}
            setValue={setUpdateValue}
            value={updateValue}
          />
        ))}
      <input
        style={{ border: 'none' }}
        type="text"
        value={value}
        placeholder="Enter your thoughts!"
        onKeyPress={handleAddNote}
        onChange={e => setValue(e.target.value)}
      ></input>
    </>
  );
}
