import { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import initialContacts from './Data/Data'
import Contacts from './Pages/Contacts';
import Header from './Components/Navbar/Header';
import { ToastContainer } from 'react-toastify';
import AddContact from './Pages/AddConatct';
import {Container} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from './Pages/Register';
import Login from './Pages/Login';
import Notfound from './Pages/Notfound';
import EditContact from './Pages/EditContact';
import ContactDetails from './Pages/ContactDetails';
import {ContactContext} from './Context/Contact.Context'


function App() {
   const [contacts,setContact]= useState(initialContacts);
   
  // console.log(contacts);
  return (
    <div className="App">
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
{/* Same as */}
<ToastContainer />
      <BrowserRouter>
      <Header/>
      <Container className='pt-3 text-center' style={{width:"40rem"}}>
        
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/add-contact" element={<AddContact />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/edit-contact/:id" element={<EditContact />}/>
        <Route path="/contacts/:id" element={<ContactDetails />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
       
        
      </Container>
      </BrowserRouter>

    </div>
  )
}

export default App
