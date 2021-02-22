import React, {Fragment} from 'react';
import {Button, Row, Card} from "react-bootstrap"

export const ContactInfo = () => {
  return (
      <Fragment>
    <Card>
    
        <Button href='mailto:davidstinnett@icloud.com' variant="outline-light" style={{backgroundColor: "rgba(209,104,119,255)"}}>
      Email:
      davidstinnett@icloud.com
      </Button>
   
      <Button href='tel:+18049721754' variant="outline-light" style={{backgroundColor: "rgba(209,104,119,255)"}}>
      Phone:
      804.972.1754
      </Button>
      
      
    
    </Card>
    </Fragment>
  );
};

export default ContactInfo;