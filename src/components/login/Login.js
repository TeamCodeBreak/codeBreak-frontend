import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import { When, Unless } from 'react-if';

import { AuthContext } from '../../context/auth.js';

function Login() {
  let auth = useContext(AuthContext);

  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange = value => event => {
    setValues({ ...values, [value]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  async function handleSubmit(event) {
    event.preventDefault();
    await auth.login(values.username, values.password);
    setValues('');
  }

  return (
    <>
      <When condition={!auth.isLoggedIn}>
        <FormControl>
          <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            <div>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <FormControl
                  id="usernameLogin"
                  sx={{ m: 1, width: '25ch' }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-username">
                    Username
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-username"
                    type={values ? 'text' : 'username'}
                    value={values.username}
                    onChange={handleChange('username')}
                    endAdornment={
                      <InputAdornment position="end">
                        <AccountCircle
                          sx={{ color: 'action.active', mr: -0.5, my: 0 }}
                        />
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: '15px',
            }}
          >
            <div>
              <Button
                sx={{
                  width: '100px',
                  border: '1px solid green',
                  borderRadius: '10px',
                }}
                variant="outlined"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
          </Box>
        </FormControl>
      </When>
    </>
  );
}

export default Login;
