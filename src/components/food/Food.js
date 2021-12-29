import { useState, useContext } from 'react';
import axios from 'axios';
import './food.scss';
import { ThemeContext } from '../../context/theme';
import { Button, Card, CardActionArea, CardContent, TextField, Typography } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';



const REACT_APP_URL = process.env.REACT_APP_URL;

export default function Food() {
  const theme = useContext(ThemeContext);
  const [formData, setFormData] = useState();
  const [data, setData] = useState();

  async function findRestaurant(e) {
    e.preventDefault();
    let obj = {
      postalcode: formData,
    };
    let response = await axios.post(`${REACT_APP_URL}/food`, obj);

    let filteredResponse = response.data.data.filter(value => {
      if (!value.ad_position) {
        return true;
      } else {
        return false;
      }
    });

    setData(filteredResponse);
  }

  function clearResults() {
    setData([]);
  }

  return (
    <div className={theme.mode}>
      <div>
        <div data-testid="data" id="data">
          <form onSubmit={findRestaurant}
            id="zipCodeForm"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '300px',
            }}>
            <TextField
              style={{
                margin: '1%',
              }}
              onChange={e => setFormData(e.target.value)}
              name="ZIP Code"
              required
              id="outlined-required"
              label="ZIP Code"
              InputProps={{
              endAdornment: (
                <LocalDiningIcon position="end" />
              ),
            }}
            />
            <Button
              variant="contained"
              id="findButton"
              type="submit"
            >
              Find
            </Button>
            <Button
              variant="contained"
              id="clearButton"
              onClick={clearResults}
            >
              Clear
            </Button>
          </form>
          {data &&
            data.map((foodPlace, idx) => (
              <div
                id="foodData"
                key={idx}
              >
                <Card
                  id="restCard"
                >
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
                        data-testid={foodPlace.address}
                        color="text.secondary"
                      >
                        {foodPlace.address}
                      </Typography>
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
