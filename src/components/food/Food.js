import { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';

const REACT_APP_URL = process.env.REACT_APP_URL;
export default function Food() {
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

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div data-testid="data">
        <form onSubmit={findRestaurant}>
          <TextField
            onChange={e => setFormData(e.target.value)}
            name="zipcode"
            required
            id="outlined-required"
            label="zipcode"
          />
          <Button
            variant="contained"
            style={{
              width: 'auto',
              height: '3.4rem',

              backgroundColor: 'lightBlue',
            }}
            type="submit"
          >
            Find
          </Button>
        </form>
        {data &&
          data.map((foodPlace, idx) => (
            <div
              key={idx}
              style={{ margin: '3rem', position: 'relative', zIndex: '100' }}
            >
              <Card
                style={{ width: 350, background: 'lightBlue', color: 'white' }}
              >
                <CardActionArea>
                  <CardContent >
                    <Typography gutterBottom variant="h5" data-testid= {foodPlace.name} component="div">
                      {foodPlace.name}
                    </Typography>
                    <Typography variant="body2" data-testid="address"color="text.secondary">
                      {foodPlace.address}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
