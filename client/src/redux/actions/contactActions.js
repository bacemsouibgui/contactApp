import { GET_CONTACTS } from '../actionsTypes'
import axios from 'axios';
// get
export const getContacts=()=>(dispatch)=> {
   
    axios.get('/api/contacts/')
    .then((res)=>dispatch({type: GET_CONTACTS, payload: res.data}))
    .catch((err)=> console.log(err))

}

// add
export const addContact =(newContact)=>(dispatch)=> {

    axios.post('/api/contacts/add', newContact)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))

}

// delete
export const deleteContact =(idContact)=>(dispatch)=> {

    axios.delete(`/api/contacts/delete/${idContact}`)
    .then((res)=> dispatch(getContacts()))
    .catch((err)=>console.log(err))

}

// edit
export const editContact =(idContact, editeContact)=>(dispatch)=> {

    axios.put(`/api/contacts/edit/${idContact}`, editeContact )
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}