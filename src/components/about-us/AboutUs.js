import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <h1>About Us Coming Soon
        <br></br>Harvey 👨🏻‍🎓
        <CircularProgress color="error" />
        <br></br>Marquesa 🧑🏻‍🎓
        <CircularProgress color="warning" />
        <br></br>Roop 👨🏽‍🎓
        <CircularProgress color="error" />
        <br></br>Sarah 👩🏻‍🎓
        <CircularProgress color="warning" />
        <br></br>Christopher 👨🏻‍🎓
        <CircularProgress color="error" />
      </h1>
    </Stack>
  );
}
