import './notes.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth';

const url = process.env.REACT_APP_URL;
export default function Notes() {
  const auth = useContext(AuthContext);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (auth.token) {
      console.log(auth.token);
      getNotes();
    }
  }, [auth.token]);

  async function getNotes() {
    let config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    console.log(auth.token);
    let data = await axios.get(`${url}/notes`, config);

    console.log(data);
    setNotes(data);
  }

  return <></>;
}
