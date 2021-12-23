import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Switch } from '@mui/material';
import './header.scss';
import { ThemeContext } from '../../context/theme';
import { useContext } from 'react';
import Logout from '../logout/Logout';
import { When } from 'react-if';
import { AuthContext } from '../../context/auth.js';
import lightLogo from '../../assets/codebrLogoLight.png'

function Header(props) {
  let theme = useContext(ThemeContext);
  let auth = useContext(AuthContext);

  const headerStyle = {
    dark: {
      color: '#99adb0',
    },
    light: {
      color: '#4B575D',
    },
    common: {
      transition: 'all 1s ease',
    },
  };

  const themeStyle = {
    ...(theme.mode === 'light' ? headerStyle.light : headerStyle.dark),
    ...headerStyle.common,
  };

  return (
    <Box sx={{ flexGrow: 1 }} data-testid="header">
      <div style={themeStyle} className="header1" position="static" id="navBar">
        {theme.mode === 'light' ? 
                  <img src={lightLogo} alt="logo" id="title"/>
                  : <img src={lightLogo} alt="logo" id="title"/>}
        <div id="login-switch-container">
          <Typography
            className="loginHome"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            id="title"
            onClick={() => props.setEnter(true)}
          >
            login
          </Typography>
          <Switch
            className="switch-theme"
            onClick={() =>
              theme.setMode(theme.mode === 'light' ? 'dark' : 'light')
            }
          ></Switch>
        </div>
        <When condition={auth.isLoggedIn}>
          <div id="logoutButtonDiv" style={{ width: '10%', display: 'flex' }}>
            <Logout
              showSignup={props.showSignup}
              setShowSignup={props.setShowSignup}
            />
          </div>
        </When>
      </div>
    </Box>
  );
}

export default Header;
