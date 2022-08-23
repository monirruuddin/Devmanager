import { createContext, useState } from "react"
import Date from '../Data/Data'
import { v4 as uuidv4 } from 'uuid';

export const ContactContext = createContext();

export const ContactProvider =({children})=>{
    const deleteElement = (id)=>{
        const afterDeletecontacts = contacts.filter((contact)=> contact.id !== id)
        setContact(afterDeletecontacts)
      }

      const updateContact=(updateContactItem,id)=>{

        const afterUpdatedata = contacts.map((item)=>{
          if(item.id === id){
            return{
              ...updateContactItem
            }
          }else{
              return item;
            
          }
        })
        setContact(afterUpdatedata)
        
      
    }

    const addContactItem =(contact)=>{
      const addMoreConatact = {
        id: uuidv4(),
        ...contact,
      }
      setContact([...contacts,addMoreConatact])
    }


    const [contacts,setContact]= useState(Date)
    const value={
        contacts,
        deleteElement,
        updateContact,
        addContactItem
    }
    return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}
