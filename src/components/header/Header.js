import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './header.scss';

function Header() {

  return (
    <Box sx={{ flexGrow: 1 }} data-testid="header">
      <AppBar position="static" id='navBar'>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} id='title'>
          codeBreak
        </Typography>
      </AppBar>
    </Box>
  );
}

export default Header;