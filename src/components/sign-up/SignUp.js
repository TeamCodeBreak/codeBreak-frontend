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
import './sign-up.scss';
import Container from '@mui/material/Container';
import { AuthContext } from '../../context/auth.js';

function SignUp(props) {

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
    setValues('');
  }

  return (
    <>
      <When condition={!auth.isLoggedIn && props.showSignup}>
        <Container id="formContainer">
          <h2>Signup</h2>
          <FormControl onChange={handleChange}>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <div>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                    <OutlinedInput
                      id="outlinedInputUsername"
                      required
                      type={values ? 'text' : 'username'}
                      defaultValue={''}
                      value={values.username}
                      onChange={handleChange('username')}
                      endAdornment={
                        <InputAdornment position="end">
                          <AccountCircle sx={{ color: 'action.active', mr: -0.5, my: 0 }} />
                        </InputAdornment>
                      }
                      label="Username"
                    />
                  </FormControl>
                </Box>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlinedInputPassword"
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
            <Box id="buttonCont">
              <Button
                id="loginButton"
                variant="contained"
                onClick={handleSubmit}>
                Signup</Button>
            </Box>
          </FormControl>
        </Container>
      </When>
    </>
  );
}

export default SignUp;
