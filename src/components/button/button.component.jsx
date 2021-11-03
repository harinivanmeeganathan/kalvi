import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './button.styles.scss';

export default function ButtonGuide() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" className="btn">Program Guidelines</Button>
    </Stack>
  );
}
