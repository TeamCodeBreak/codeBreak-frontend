import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import { When } from 'react-if';

import { AuthContext } from '../../context/auth.js';
// import { ThemeContext } from '../../context/theme.js'; ------> would we be able to implement theme preference to component colors?

function Logout(props) {
  let auth = useContext(AuthContext);

  async function handleSubmit() {
    auth.logout();
    props.setShowSignup(false);
  }

  return (
    <div id="logoutButton">
      <When condition={auth.isLoggedIn}>
        <Button
          size="small"
          border="none"
          variant="contained"
          color="error"
          // variant="outlined"
          onClick={handleSubmit}
        >
          Logout
        </Button>
      </When>
    </div>
  );
}

export default Logout;
