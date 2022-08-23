import React,{useContext, useEffect,useState} from 'react'
import {Card,ListGroup,Button} from 'react-bootstrap';
import { useParams,useNavigate ,Link} from 'react-router-dom'
import { FaEye,FaRegTrashAlt} from 'react-icons/fa';
import {toast} from 'react-toastify';
import { ContactContext } from '../Context/Contact.Context';

function ContactDetails() {
  const {contacts,deleteElement} = useContext(ContactContext)
    const [contact,setContact]= useState({})
    const {id}= useParams()

    const foundConatact = contacts.find((contact)=>{return contact.id === id})

    useEffect(()=>{
        if(id && foundConatact){
            setContact(foundConatact)
        }

    },[id]);

    const navigate = useNavigate()
    const handleRemove=(id)=>{
        deleteElement(id)
        navigate('/contacts')
        toast( `${firstName}! has been remove from info`);

    }
    const { firstName, lastName, email, gender, profession, bio, image,dateOfBirth } = contact

  return (
    <>
    <h3>Contact Details</h3>
    <Card className='mb-3' style={{color:"#333",textAlign:"left"}} >
      <div className="d-flex">
        <Card.Img src={image}  style={{width:"10rem",height:"10rem"}}/>
       <div>
          <Card.Body>
              <Card.Title>{firstName} {lastName}</Card.Title>
              <Card.Subtitle >{profession}</Card.Subtitle >
              <Card.Text>
                {bio}
              </Card.Text>
              <ListGroup className="list-group-flush">
              <ListGroup.Item>Email: {email}</ListGroup.Item>
              <ListGroup.Item>Genger: {gender}</ListGroup.Item>
              <ListGroup.Item>Date OF Birth:{dateOfBirth instanceof Object  ? format(dateOfBirth,dd/MM/yyyy) : dateOfBirth } </ListGroup.Item>
            </ListGroup>
            <Card.Link as={Link} to={`/edit-contact/${id}`}><Button><FaEye/> Edit</Button> </Card.Link>
              <Card.Link><Button onClick={()=>handleRemove(id)}><FaRegTrashAlt/> Delete</Button></Card.Link>
            </Card.Body>
       </div>
      </div>
     
      
    </Card>
    </>
  )
}

export default ContactDetails