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