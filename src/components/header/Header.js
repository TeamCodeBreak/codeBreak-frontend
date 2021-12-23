import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Switch } from '@mui/material';
import './header.scss';
import { ThemeContext } from '../../context/theme';
import { useContext } from 'react'


function Header() {
  let theme = useContext(ThemeContext);
  // console.log('theme', theme.mode);

  // const themeHeader = theme.mode ? 'dark': 'light';
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
    }
  };

  const themeStyle = {
    ...(theme.mode === 'light' ? headerStyle.light : headerStyle.dark),
    ...headerStyle.common,
  }
  return (

    <Box sx={{ flexGrow: 1 }} data-testid="header">
      <AppBar style={themeStyle} position="static" id='navBar'>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} id='title'>
          codeBreak
        </Typography>
        <Switch onClick={() => theme.setMode(theme.mode === 'light' ? 'dark' : 'light')}></Switch>
      </AppBar>
    </Box>

  );
}

export default Header;