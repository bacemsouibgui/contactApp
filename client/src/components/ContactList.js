import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getContacts } from '../redux/actions/contactActions';
import ContactCard from './ContactCard';

function ContactList() {
  const dispatch= useDispatch()

  useEffect(()=> {
    dispatch(getContacts())
  }, [])

  const contacts= useSelector((state)=>state.contacts.contacts)
  console.log(contacts)

  return (
    <div style={{display: 'flex', flexwrap: 'wrap', margin: '40px'}}>
      {contacts && contacts.map((contact)=>(
        <ContactCard contact={contact}/>
      ))}
    </div>
  )
}

export default ContactList