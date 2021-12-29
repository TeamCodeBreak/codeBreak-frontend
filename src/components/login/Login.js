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
import { Link } from '@mui/material';
import { When } from "react-if";
import './login.scss';
import Container from '@mui/material/Container';
import { ThemeContext } from '../../context/theme';
import { AuthContext } from '../../context/auth.js';

function Login(props) {

  let auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);

  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false
  });


  let handleChange = (e) => {
    e.preventDefault();
    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
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

  async function handleSubmit(event) {
    event.preventDefault();
    await auth.login(values.username, values.password);
    setValues('');
  }

  return (
    <>
    
      <When condition={!auth.isLoggedIn && !props.showSignup}>
        <div className={theme.mode}>
          <Container id="formContainer">
            <h2>Login</h2>
            <FormControl>
              <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                <div>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <FormControl id="usernameLogin" sx={{ m: 1, width: '25ch' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                      <OutlinedInput
                        inputProps={{
                          'data-testid': 'username-field'
                        }}
                        id="outlined-adornment-username"
                        type={values ? 'text' : 'username'}
                        value={values.username}
                        name='username'
                        onChange={handleChange}
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
                      inputProps={{
                        'data-testid': 'password-field'
                      }}
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      name='password'
                      onChange={handleChange}
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
                <Link
                  id="createAccount"
                  onClick={() => {
                    props.setShowSignup(true);
                  }}>
                  create an account
                </Link>
                <Button id="loginButton" data-testid="login" variant="contained" onClick={handleSubmit}>
                  Login
                </Button>
                {/* <When condition={values.password}>
                <Alert severity={'success'} />
                <Unless condition={!values.password}>
                  <Alert severity="error">ERROR!</Alert>
                </Unless>
              </When> */}
              </Box>
            </FormControl>
          </Container>
        </div>
      </When>
    </>
  );
}

export default Login;
