import React, { useContext } from 'react'
import Contact from '../Components/Contact/Contact';
import {Container,Button,Col } from 'react-bootstrap';
import {ContactContext} from '../Context/Contact.Context'

 function Contacts({contactDateAgain}){
  const {contacts}=useContext(ContactContext)

  return (
    <Container className='pt-3'>
      
      <h3 className='pt-3'>All Contact Info</h3>
      {
        contacts.map((conatct,index)=> <Contact key={index}  contactDateAgain={conatct}/>)
      }
    </Container>
  )
}

export default Contacts