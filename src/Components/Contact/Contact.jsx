import React, { useContext } from 'react'
import {Card,ListGroup,Button} from 'react-bootstrap';
import { FaEye,FaRegTrashAlt} from 'react-icons/fa';
import {format} from 'date-fns'
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import { ContactContext } from '../../Context/Contact.Context';


function Contact({contactDateAgain}) {
  const {id,firstName,lastName,email,profession,bio,image,gender,dateOfBirth} = contactDateAgain;
  const {deleteElement} =useContext(ContactContext)
  const handleRemove =(id)=>{
    toast( `${firstName}! has been remove from info`);
    deleteElement(id)
  }
  
  
  return (
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
            <Card.Link as={Link} to={`/contacts/${id}`}><Button><FaEye/> View</Button> </Card.Link>
              <Card.Link><Button onClick={()=>handleRemove(id)}><FaRegTrashAlt/> Delete</Button></Card.Link>
            </Card.Body>
       </div>
      </div>
     
      
    </Card>
  )
}

export default Contact