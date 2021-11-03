import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './card.styles.scss';

const card1 = (
  <React.Fragment>
      <div className = "content">
      <img src="https://illamthedikalvi.tnschools.gov.in/assets/icon/email.svg" width="30" alt="mail"/>
      <CardContent >
      <Typography sx={{ fontSize: 18,fontWeight: 600 }} variant="h5"  component="div">
      மின்னஞ்சல் / Email ID
      </Typography>
      <Typography variant="body2" sx={{ fontSize: 15,fontWeight: 600 }} className = "nummail">
      illamthedikalvi@gmail.com
      </Typography>
    </CardContent>

      </div>
  </React.Fragment>
  
);

const card2 = (
    <React.Fragment>
    <div className = "content">
    <img src="https://illamthedikalvi.tnschools.gov.in/assets/icon/tollfree.svg" width="30" alt="mobile"/>
      <CardContent >
        <Typography sx={{ fontSize: 18,fontWeight: 600 }} variant="h5" component="div">
        தொடர்புக்கு அழையுங்கள் / Contact the toll free number
        </Typography>
        <Typography className = "nummail" sx={{ fontSize: 15,fontWeight: 600 }} variant="body2">
        14417
        </Typography>
      </CardContent>
    </div>
    </React.Fragment>
    
  );
export default function OutlinedCard() {
  return (
    <Box className="card-container" sx={{ minWidth: 275 }}>
      <Card variant="outlined" className ="card" >{card1}</Card>
      <Card variant="outlined" className ="card" >{card2}</Card>
    </Box>
  );
}
