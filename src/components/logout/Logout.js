import * as React from 'react';
import { useContext } from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { When } from "react-if";

import { AuthContext } from '../../context/auth.js';

function Logout() {

  let auth = useContext(AuthContext);

  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (value) => (event) => {
    setValues({ ...values, [value]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    await auth.login(values.username, values.password);
    setValues('');
  }

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <When condition={auth.isLoggedIn}>
          <Button variant="outlined" onClick={auth.logout} onChange={handleChange}>
            Logout
          </Button>
        </When>
      </FormControl>
      
    </>
  );
}

export default Logout;
