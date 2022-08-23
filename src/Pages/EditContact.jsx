import React from 'react'
import ContactForm from '../Components/Contact/ContactForm'
import { useParams } from 'react-router-dom'

function EditContact({contacts,updateContact}) {
    const {id}= useParams()
    const foundConatact = contacts.find((contact)=>{return contact.id === id})
   
  return (
    <div>
    <ContactForm contact={foundConatact} updateContact={updateContact}/>
    </div>
  )
}

export default EditContact