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
import { When } from "react-if";

import { AuthContext } from '../../context/auth.js';

function SignUp2() {

  let auth = useContext(AuthContext);

  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (value) => (event) => {
    setValues({ ...values, [value]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await auth.register(values.username, values.password);
  }

  return (
    <>
      <When condition={!auth.isLoggedIn}>
        <FormControl>
          <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            <div>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                {/* <TextField id="input-with-sx" label="With sx" variant="standard" /> */}
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-username"
                    type={values ? 'text' : 'username'}
                    value={values.username}
                    onChange={handleChange('username')}
                    endAdornment={
                      <InputAdornment position="end">
                        <AccountCircle sx={{ color: 'action.active', mr: -0.5, my: 0 }} />
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
          </Box>
          <Button variant="outlined" onClick={handleSubmit}>Register</Button>
        </FormControl>
      </When>
    </>
  );
}

export default SignUp2;
