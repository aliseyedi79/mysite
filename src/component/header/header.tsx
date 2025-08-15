'use client';
import { Grid, NoSsr } from '@mui/material';

import Appbar from '@/component/header/appbar';

export default function Header() {
  return (
    <NoSsr>
      <Grid>
        <Appbar />
      </Grid>
    </NoSsr>
  );
}
