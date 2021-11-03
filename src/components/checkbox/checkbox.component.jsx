import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="மேலே கொடுக்கப்பட்ட தகவல்கள் அனைத்தும் உண்மை. / All the information provided above are true to my knowledge." />
    </FormGroup>
  );
}
