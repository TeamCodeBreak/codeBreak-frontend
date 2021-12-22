import Box from '@mui/material/Box';
import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import './footer.scss';


function Footer() {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: 500 }} id='footerNav' data-testid="footer">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}

      >
        <BottomNavigationAction label="Copyright" icon={<CopyrightRoundedIcon />} />
        <BottomNavigationAction label="Contact" icon={<PermContactCalendarRoundedIcon />} />
        <BottomNavigationAction label="Socials" icon={<AlternateEmailRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
