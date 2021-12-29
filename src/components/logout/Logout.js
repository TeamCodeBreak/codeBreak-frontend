import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import { When } from 'react-if';
import './logout.scss';
import { AuthContext } from '../../context/auth.js';
import { ThemeContext } from '../../context/theme';

function Logout(props) {
  let auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  
  async function handleSubmit() {
    auth.logout();
    props.setShowSignup(false);
  }

  return (
    <div className={theme.mode} id="logoutButtonCont">
      <When condition={auth.isLoggedIn}>
        <Button
          id="logoutButton"
          size="small"
          border="none"
          variant="contained"
          onClick={handleSubmit}
        >
          Logout
        </Button>
      </When>
    </div>
  );
}

export default Logout;
