import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getContacts } from '../redux/actions/contactActions';
import ContactCard from './ContactCard';
import { Container } from 'react-bootstrap';

function ContactList() {
  const dispatch= useDispatch()

  useEffect(()=> {
    dispatch(getContacts())
  }, [])

  const contacts= useSelector((state)=>state.contacts.contacts)
  console.log(contacts)

  return (
    <div >
      <Container style={{display: 'flex', flexWrap: 'wrap', margin: '20px'}}>
      {contacts && contacts.map((contact)=>(
        <ContactCard contact={contact}/>
      ))}
      </Container>
    </div>
  )
}

export default ContactList