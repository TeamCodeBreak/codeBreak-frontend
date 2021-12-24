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
import darkLogo from '../../assets/codebrLogoDark.png'

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
        {/* TODO: Need to persist theme selection across page switches */}
        {theme.mode === 'light' ?
          <a href="/"> <img src={darkLogo} alt="logo" id="title" /></a>
          : <a href="/"> <img src={lightLogo} alt="logo" id="title" /></a>}
        <div id="login-switch-container">
          <When condition={!auth.isLoggedIn}>
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
          </When>
          <When condition={auth.isLoggedIn}>
            <Logout
              showSignup={props.showSignup}
              setShowSignup={props.setShowSignup}
            />
          </When>
          <div id="themeSwitch">
            <Switch
              id='switch'
              color="default"
              className="switch-theme"
              onClick={() =>
                theme.setMode(theme.mode === 'light' ? 'dark' : 'light')
              }
            />
            <span id="themeSpan">
              Theme
            </span>
          </div>
        </div>
      </div>
    </Box >
  );
}

export default Header;
