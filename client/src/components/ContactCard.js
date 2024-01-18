import React from 'react';
import {Card, Button} from 'react-bootstrap'

function ContactCard({contact}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
          {contact.email}
        </Card.Text>
        <Button variant="primary">{contact.phone}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard