import { useState, useContext } from 'react';
import axios from 'axios';
import './food.scss';
import { ThemeContext } from '../../context/theme';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const REACT_APP_URL = process.env.REACT_APP_URL;

export default function Food() {
  const theme = useContext(ThemeContext);
  const [formData, setFormData] = useState({ postalcode: null, cuisine: '' });
  const [data, setData] = useState();

  async function findRestaurant(e) {
    e.preventDefault();
    let obj = {
      postalcode: formData.postalcode,
      cuisine: formData.cuisine,
    };
    let response = await axios.post(`${REACT_APP_URL}/food`, obj);
    setData(response.data);
  }

  function clearResults() {
    setData([]);
  }
  return (
    <div className={theme.mode}>
      <div>
        <div data-testid="data" id="data">
          <form
            onSubmit={findRestaurant}
            id="zipCodeForm"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '380px',
            }}
          >
            <TextField
              style={{
                margin: '1%',
              }}
              onChange={e =>
                setFormData({ ...formData, postalcode: e.target.value })
              }
              name="ZIP C"
              required
              id="outlined-required"
              label="ZIP Code"
              InputProps={{
                endAdornment: <LocalDiningIcon position="end" />,
              }}
            />
            <TextField
              style={{
                margin: '1%',
              }}
              onChange={e =>
                setFormData({ ...formData, cuisine: e.target.value })
              }
              name="Cuisine"
              required
              id="outlined-required"
              label="Cuisine"
              InputProps={{
                endAdornment: <LocalDiningIcon position="end" />,
              }}
            />
            <Button variant="contained" id="findButton" type="submit">
              Find
            </Button>
            <Button variant="contained" id="clearButton" onClick={clearResults}>
              Clear
            </Button>
          </form>
          {data &&
            data.map((foodPlace, idx) => (
              <div id="foodData" key={idx}>
                <Card id="restCard">
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        data-testid={foodPlace.name}
                        component="div"
                      >
                        {foodPlace.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        data-testid={foodPlace.location.address1}
                        color="text.secondary"
                      >
                        {foodPlace.location.address1}
                      </Typography>
                      <a
                        id="restCardURL"
                        href={foodPlace.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        More Info
                      </a>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
