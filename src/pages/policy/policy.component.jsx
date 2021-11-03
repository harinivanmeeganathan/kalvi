import React from 'react';
import './policy.styles.scss';

const Policy = () => (
    <div className="policy-container">
        <div className="pol-head">
            <label className="topic">Privacy Policy</label>
        </div>
        <div className="outer-para">
        <React.Fragment>
         <tr className="data"><td>The Government of Tamil Nadu Website does not automatically capture any specific personal information from you without your consent, (like name, phone number or e-mail address), that allows us to identify you individually.</td></tr>
         <tr className="data"><td>If the Information Technology Department requests you to provide personal information, for registration or other activities ,you will be informed for the particular purposes for which the information is gathered and adequate security measures will be taken to protect your personal information.</td></tr>
         <tr className="data"><td>We do not sell or share any personally identifiable information volunteered on this Portal site to any third party (public/private). Any information provided to this Portal will be protected from loss, misuse, unauthorized access or disclosure, alteration, or destruction to the extent possible.</td></tr>
         <tr className="data"><td>This portal gathers certain information about the User, such as Internet protocol (IP) addresses, domain name, browser type, operating system, the date and time of the visit and the pages visited. However, no attempt is madeto link these addresses with the identity of individuals visiting this site unless an attempt to damage the site has been detected or the department wants such information for any specific queries.</td></tr>
        </React.Fragment>
        </div>
        <div className="hyper">
            <label className="hyper-pol">Hyper Linking Policy</label>
            <div className="subhead">
            <React.Fragment>
                <tr className="subheadpol">Links to external websites/portals</tr>
                <tr className="detail">At many places in this Portal, you shall find links to other websites/portals. These links have been placed after careful scrutiny. These links have been placed for users convenience. NIC/Organisation / Department are not responsible for the contents and reliability of the linked websites and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this Portal should not be assumed as endorsement of any kind. We cannot guarantee that these links will work all the time and we have no control over availability of linked pages.</tr>
            </React.Fragment>
            </div>
            <div className="subhead">
            <React.Fragment>
                <tr className="subheadpol">Links to this Portal by other websites</tr>
                <tr className="detail">We do not object to you linking directly to the information that is hosted on this Portal and no prior permission is required for the same. However, we would like you to inform us about any links provided to this Portal so that you can be informed of any changes or updation that are carried on therein. Also, we do not permit our pages to be loaded into frames on any third party sites. The pages belonging to this Portal must load into a newly opened browser window of the User.</tr>
            </React.Fragment>
            </div>
            <div className="subhead">
            <React.Fragment>
                <tr className="subheadpol">Copyright Policy</tr>
                <tr className="detail">The contents published in this portal are primarily owned by the variousDepartments of Government of Tamil Nadu.Material featured on this Portal maybe reproduced free of charge after taking proper permission from the respective Organisation / Department. However, the material has to be reproduced accurately and not to be used in a derogatory manner or in a misleading context and as per the guidelines provided by the respective Section / Department. Wherever the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to reproduce this material shall not extend to any material which is identified as being copyright of a third party. Authorisation to reproduce such material must be obtained from the departments/copyright holders concerned.</tr>
            </React.Fragment>

            </div>
        </div>
    </div>
);

export default Policy;