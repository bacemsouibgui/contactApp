import React, {useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addContact} from '../redux/actions/contactActions';


function AddForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [cancel, setCancel] = useState(false)

    const dispatch = useDispatch()
    // add
    const add =()=> {
        const newContact= {name,email,phone}
        dispatch(addContact(newContact))
        setCancel(!cancel)
    }
  return (
    <div>
      
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        onChange={(e)=> setName(e.target.value)}
        type="name" placeholder="Enter Name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        onChange={(e)=> setEmail(e.target.value)}
        type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>phone</Form.Label>
        <Form.Control 
        onChange={(e)=> setPhone(e.target.value)}
        type="Number" placeholder="Phone" />
      </Form.Group>
     
      <Button 
      onClick={add}
      variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddForm