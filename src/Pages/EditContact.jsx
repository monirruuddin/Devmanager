import React, { useContext } from 'react'
import ContactForm from '../Components/Contact/ContactForm'
import { useParams } from 'react-router-dom'
import { ContactContext } from '../Context/Contact.Context'

function EditContact() {
  const {contacts,updateContact}= useContext(ContactContext)
    const {id}= useParams()
    const foundConatact = contacts.find((contact)=>{return contact.id === id})
   
  return (
    <div>
    <ContactForm contact={foundConatact}/>
    </div>
  )
}

export default EditContact