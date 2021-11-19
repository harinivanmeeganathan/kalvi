import React from 'react';
import './homepage.styles.scss';
import Pdf from "../../documents/ITK_Programme_Guidelines.pdf";
import ButtonGuide from '../../components/button/button.component';
import FormDialog from '../../components/form/form.component';

const HomePage = () => {
    function onResumeClick() {
        window.open(Pdf);
        return false;
      }      
    return(
        <div className = "home-container">
        <div className="banner">
        <img className = "ban" src="https://illamthedikalvi.tnschools.gov.in/assets/images/Banner%202.png" width = "1300" alt="banner"/>
            <div className = "ilamkalvi">
                <div className = "ilamkalvi_1">
                    <h4 className = "ilam"><b>இல்லம் தேடிக் கல்வி</b></h4>
                    <p className = "ilam"><b>தமிழ்நாடு அரசு</b> பள்ளிக் கல்வித் துறையின் ஒரு முன்முயற்சி</p>
                </div>
            </div>

        </div>
        <div className="btn">
        <ButtonGuide onClick={onResumeClick()}/>
        </div>

        <div className="bottom">
            <div className="left">
            <video width = "450" controls="" autoplay="" name="media">
            <source src="https://lmes-content.s3.ap-south-1.amazonaws.com/ANTHEM_SONG_SSA.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4HOG6W4V3VS4CB5U%2F20211103%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20211103T071716Z&amp;X-Amz-Expires=1800&amp;X-Amz-Signature=fd408b6c14e5ba6162145503f0378d9d47eadc43a66a61529f84225b5a4fdad2&amp;X-Amz-SignedHeaders=host" type="video/mp4"/>
            </video>            
            </div>
            <div className="right">
                <p className = "ilam"><b>வணக்கம்!</b> <br/><b>இல்லம் தேடிக் கல்வி ஒரு தன்னார்வ தொண்டு.</b> கொரோனா பெருந்தொற்றுப் பரவல் சார்ந்த பொது முடக்க காலங்களில் அரசு பள்ளிகளில் ஒன்று முதல் எட்டாம் வகுப்பு வரை பயிலும் மாணவர்களின் கற்றல் இடைவெளி மற்றும் இழப்புகளை சரி செய்ய இல்லம் தேடிக் கல்வித் திட்டம் செயல்படுத்தப்பட உள்ளது. பள்ளி முடிந்த பின்பு மாலை நேரங்களில் 'இல்லம் தேடிக் கல்வி' மையங்களில் கற்பித்தல் சேவையை மேற்கொள்ள உள்ள தன்னார்வலர்கள் பதிவு செய்ய ஏதுவாக, படிவம் இவ்விணைய தளத்தில் வழங்கப்பட்டு உள்ளது.</p>
            </div>
        </div>
        <div className="down">
            <p className = "ilam"><b>தன்னார்வலர்கள்..</b></p>
            <React.Fragment>
                <tr  className = "ilam"><td>1.வாரத்திற்கு குறைந்தது ஆறு மணி நேரம் குழந்தைகளுடன் செலவிட தயாராக இருக்க வேண்டும் (அல்லது) பகுதி நேரமாகவும் தன்னார்வலராக இருக்கலாம்.</td></tr>
                <tr  className = "ilam"><td>2.கண்டிப்பாக குழந்தைகளுடன் உரையாட தமிழ் தெரிந்திருக்க வேண்டும்</td></tr>
                <tr  className = "ilam"><td>3.தமிழ், ஆங்கிலம், மற்றும் கணிதம் கற்றுத்தர வேண்டும். (பயிற்சிகளும் உபகரணங்களும் வழங்கப்படும்)</td></tr>
                <tr  className = "ilam"><td>4.யார் நிர்பந்தமும் இன்றி தன்முனைப்பாக பங்கேற்க வேண்டும்</td></tr>
                <tr  className = "ilam"><td>5.குறைந்தபட்சம் <b>17 வயது</b> நிரம்பி இருத்தல் அவசியம்</td></tr>
            </React.Fragment>
        </div>
        <div className = "formi">
            <FormDialog className="button_form"/>
        </div>

        </div>
);

}


export default HomePage;