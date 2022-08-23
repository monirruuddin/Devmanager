import { createContext, useState } from "react"
import Date from '../Data/Data'

export const ContactContext = createContext();

export const ContactProvider =({children})=>{
    const deleteElement = (id)=>{
        const afterDeletecontacts = contacts.filter((contact)=> contact.id !== id)
        setContact(afterDeletecontacts)
      }
    const [contacts,setContact]= useState(Date)
    const value={
        contacts,
        deleteElement,
    }
    return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}
