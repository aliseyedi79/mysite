'use client';
import { Grid, NoSsr } from '@mui/material';

import Appbar from '@/app/header/appbar';

export default function Header() {
  return (
    <NoSsr>
      <Grid>
        <Appbar />
      </Grid>
    </NoSsr>
  );
}
