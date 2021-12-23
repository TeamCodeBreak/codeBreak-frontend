import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Switch } from '@mui/material';
import './header.scss';
import { ThemeContext } from '../../context/theme';
import { useContext } from 'react';
import Logout from '../logout/Logout';

function Header(props) {
  let theme = useContext(ThemeContext);

  const headerStyle = {
    dark: {
      backgroundColor: 'darkSlateGrey ',
      color: 'pink',
    },
    light: {
      backgroundColor: 'pink',
      color: 'darkSlateGrey',
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
        <Switch
          className="switch-theme"
          onClick={() =>
            theme.setMode(theme.mode === 'light' ? 'dark' : 'light')
          }
        ></Switch>
        <Typography
          className="title"
          variant="h3"
          component="div"
          sx={{ flexGrow: 1 }}
          id="title"
        >
          codeBreak
        </Typography>
        <div id="logoutButtonDiv" style={{ width: '10%', display: 'flex' }}>
          <Logout
            showSignup={props.showSignup}
            setShowSignup={props.setShowSignup}
          />
        </div>
      </div>
    </Box>
  );
}

export default Header;
