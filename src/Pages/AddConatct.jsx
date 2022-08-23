import React from 'react'
import ContactForm from '../Components/Contact/ContactForm'

function AddConatct({addContactItem}) {
  return (
    <div>
        <ContactForm addContactItem={addContactItem}/>
    </div>
  )
}

export default AddConatct