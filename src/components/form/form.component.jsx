import * as React from 'react';
import './form.styles.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckboxLabels from '../checkbox/checkbox.component';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      தன்னார்வலர்களுக்கான பதிவேற்று படிவத்தை தொடங்கு / Click here to start the Volunteer Registration Form
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>தன்னார்வலர்களுக்கான பதிவேற்று படிவம் / Volunteer Registration</DialogTitle>
        <DialogContent>
        <Accordion>  
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <DialogContentText>அடிப்படைத் தகவல்கள் / Basic Information</DialogContentText>
        </AccordionSummary> 
        <AccordionDetails>
          <TextField autoFocus margin="dense"
            id="name" label="முழுப் பெயர் / Full Name (In Capital letters) "
            type="text" fullWidth variant="standard"
          />
    <DialogContentText>பாலினம் / Gender</DialogContentText>
        <Select className="selectcat"
            labelId="demo-simple-select-label"
            id="demo-simple-select">
            <MenuItem value="Select">SELECT</MenuItem>
            <MenuItem value="electronics">MALE</MenuItem>
            <MenuItem value="jewelery">FEMALE</MenuItem>
        </Select>
          <TextField autoFocus margin="dense"
            id="mobile" label="அலைபேசி எண் / Mobile No." 
            type="numeric" fullWidth variant="standard"
          />
           <TextField autoFocus margin="dense"
            id="mobilewhatsapp" label="வாட்ஸ்ஆப் எண். / WhatsApp No." 
            type="numeric" fullWidth variant="standard"
          />
          <TextField autoFocus margin="dense"
            id="aadhar" label="ஆதார் எண். / Aadhaar No." 
            type="numeric" fullWidth variant="standard"
          />
          </AccordionDetails>
        </Accordion>
        </DialogContent>

        <DialogContent>
        <Accordion>  
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <DialogContentText>உங்கள் முகவரி / Residential Address Details</DialogContentText>
          </AccordionSummary> 
        <AccordionDetails>
          <TextField autoFocus margin="dense"
            id="name" label=" மாவட்டம் / District"
            type="text" fullWidth variant="standard"
          />
          <TextField autoFocus margin="dense"
            id="mobile" label="கிராமம் அல்லது வார்டு/Village or Ward" 
            type="numeric" fullWidth variant="standard"
          />
           <TextField autoFocus margin="dense"
            id="mobilewhatsapp" label="உங்கள் முகவரி / Your Address" 
            type="numeric" fullWidth variant="standard"
          />
          <TextField autoFocus margin="dense"
            id="aadhar" label="அஞ்சல் குறியீட்டு எண் / Pin Code" 
            type="numeric" fullWidth variant="standard"
          />
           </AccordionDetails>
        </Accordion>
        </DialogContent>

        <DialogContent>
        <Accordion>  
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <DialogContentText>கல்வி மற்றும் தொழில் விவரங்கள் / Educational and Professional details</DialogContentText>
          </AccordionSummary> 
        <AccordionDetails>  
        <DialogContentText> கல்வித் தகுதி / Educational Qualification</DialogContentText>
        <Select className="selectcat"
            labelId="demo-simple-select-label"
            id="demo-simple-select">
            <MenuItem value="Select">SELECT</MenuItem>
            <MenuItem value="electronics">இளங்கலை பட்டதாரி / Graduate</MenuItem>
            <MenuItem value="jewelery">டிப்ளமோ / Diploma</MenuItem>
            <MenuItem value="jewelery">10ஆம் வகுப்பு / SSLC</MenuItem>
            <MenuItem value="jewelery">12ஆம் வகுப்பு / HSC</MenuItem>
            <MenuItem value="jewelery">முதுகலை பட்டதாரி / Postgraduate</MenuItem>
        </Select>
        <DialogContentText> தொழில் / Professional Status</DialogContentText>
        <Select className="selectcat"
            labelId="demo-simple-select-label"
            id="demo-simple-select">
            <MenuItem value="Select">SELECT</MenuItem>
            <MenuItem value="electronics">மாணவர் / Student</MenuItem>
            <MenuItem value="jewelery">அரசுப் பணியாளர் / Working in Govt</MenuItem>
            <MenuItem value="jewelery">தனியார் பணியாளர் / Working in Private</MenuItem>
            <MenuItem value="jewelery">சுயதொழில் முனைவோர் / Self-Employed</MenuItem>
            <MenuItem value="jewelery">வேலை தேடுபவர் / Looking for job</MenuItem>
            <MenuItem value="jewelery">இல்லத்தரசி / Home Maker</MenuItem>
            <MenuItem value="jewelery">ஆசிரியர் சமூகம் / Teaching community</MenuItem>
            <MenuItem value="jewelery">ஓய்வு பெற்றவர் / Retired</MenuItem>                        
        </Select>
          </AccordionDetails>
        </Accordion>
        </DialogContent>

        <DialogContent>
        <Accordion>  
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <DialogContentText>இதர கேள்விகள் / Additional questions</DialogContentText>
          </AccordionSummary> 
        <AccordionDetails>  
          <TextField autoFocus margin="dense"
            id="education" label="பகுதி நேர தன்னார்வலர் / Part time - Volunteer based on availability
            "
            type="text" fullWidth variant="standard"
          />
          <TextField autoFocus margin="dense"
            id="prof" label="நீங்கள் ஏன் தொண்டு செய்ய விரும்புகின்றீர்கள்? / Why do you want to volunteer?" 
            type="numeric" fullWidth variant="standard"
          />
        <TextField autoFocus margin="dense"
            id="prof" label=" முந்தைய கற்பித்தல் அனுபவம் / Previous teaching experience" 
            type="numeric" fullWidth variant="standard"
          />
        <TextField autoFocus margin="dense"
            id="prof" label="தன்னார்வ அனுபவம் / Volunteering experience" 
            type="numeric" fullWidth variant="standard"
          />
          </AccordionDetails>
        </Accordion>
        </DialogContent>

        <CheckboxLabels/>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
