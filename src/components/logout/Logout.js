import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import { When } from 'react-if';

import { AuthContext } from '../../context/auth.js';

function Logout(props) {
  let auth = useContext(AuthContext);

  async function handleSubmit() {
    auth.logout();
    props.setShowSignup(false);
  }

  return (
    <>
      <When condition={auth.isLoggedIn}>
        <Button
          style={{
            width: '100%',
            border: 'none',
            color: 'orangeRed',
          }}
          variant="outlined"
          onClick={handleSubmit}
        >
          Logout
        </Button>
      </When>
    </>
  );
}

export default Logout;
