import React,{useEffect, useState} from 'react'
import {Form,Button,Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom'


function ContactForm({addContactItem,contact,updateContact}) {

    // use it for validation
    const schema = yup
      .object({
        firstName: yup
          .string()
          .required('FirstName is Required')
          .min(4, 'FirstName must be 3 or more in length '),
        lastName: yup
          .string()
          .required('LastName is Required')
          .min(3, 'LastName must be 3 or more in length '),
        email: yup
          .string()
          .required('email is Required')
          .email('Must be a valid email'),
        profession: yup
          .string()
          .required('Profession is Required')
          .oneOf(['developer', 'designer', 'marketer'])
          .min(3, 'Profession must be 3 or more in length '),
        bio: yup
          .string()
          .required('Bio is Required')
          .min(10, 'Bio must be 10 or more in length ')
          .max(300, 'Bio must be equal or less thant 300 character'),
        image: yup
          .string()
          .required('profile Image URL is Required')
          .url('Must be a valid URL'),
        gender: yup
          .mixed()
          .required('Gender is required')
          .oneOf(['Male', 'Female']),
      })
      .required()

    // useForm Use for react hook form
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
      } = useForm({
        resolver: yupResolver(schema),
      })

      const navigate = useNavigate()
      // add the default value
      const defaultValue = {
        firstName:contact?.firstName || 'samim',
        lastName:contact?.lastName || 'Hasan',
        email:contact?.email ||'samimfazlu@gmail.com',
        gender:contact?.gender || 'Male',
        profession: contact?.profession || 'developer',
        bio:contact?.bio || 'All about myself, Modify of your own if necessary',
        image:contact?.image || 'https://randomuser.me/api/portraits/men/75.jpg',
        dateOfBirth:contact?.dateOfBirth || new Date(),
      }
      const { firstName, lastName, email, gender, profession, bio, image } =
    defaultValue
      // check the error massage
      console.log(errors);

      // reset the date after clicking
      useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            firstName: '',
            lastName: '',
            email: '',
            profession: '',
            bio: '',
            gender: 'Male',
            image: '',
          })
        }
      }, [isSubmitSuccessful])

      // take a  UseState for birth date
      const [birthYear, setBirthYear] = useState(new Date())

      // set the birth date to the date 
      useEffect(()=>{
        setValue("BirthDate",birthYear)
      },[birthYear])

      // add contact
      const onSubmit =(date)=>{

        const id= contact?.id;
        if(id){
          updateContact(date,id)
          toast('Yeah! Added New Update');
          
        }else{
          toast('Yeah! Added New Contact');
          addContactItem(date);
        }
        navigate("/contacts")
      }

  return (
    <div className='container'>
        <div className="controlForm">
    <Form onSubmit={handleSubmit(onSubmit)}>
            <Col>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
            type='text'
            id='firstName'
            defaultValue={firstName}
            {...register('firstName',{required:"This feild is required",minLength:{value:3,message:"min length 3"}})}
            isInvalid={errors?.firstName}
            placeholder="First Name" />
          </Form.Group>
          <Form.Control.Feedback type='invalid' className='d-block'>
                  {errors?.firstName?.message}
          </Form.Control.Feedback>
          </Col>
          <Col>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
            type='text'
            id='lastName'
            name='lastName'
            defaultValue={lastName}
            {...register('lastName')}
            isInvalid={errors?.lastName}
            placeholder='Enter Your Last Name' />
          </Form.Group>
          <Form.Control.Feedback type='invalid' className='d-block'>
              {errors?.lastName?.message}
          </Form.Control.Feedback>
        </Col>
        <Col>
            <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type='email'
            id='email'
            name='email'
            defaultValue={email}
            {...register('email')}
            isInvalid={errors?.email}
            placeholder='Enter Your Email' />
            </Form.Group>
            <Form.Control.Feedback type='invalid' className='d-block'>
                {errors?.email?.message}
            </Form.Control.Feedback>
        </Col>
        <Col>
        <Form.Group >
                <Form.Label htmlFor='profession'>Profession</Form.Label>
                <Form.Select
                {...register('profession')}
                id='profession'
                defaultValue={profession}
                isInvalid={errors?.profession}
                aria-label='Select your profession'
                >
                <option value='' disabled>
                    Select your profession
                </option>
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
                <option value='marketer'>Markerter</option>
                </Form.Select>
        </Form.Group >
        <Form.Control.Feedback type='invalid' className='d-block'>
            {errors?.profession?.message}
        </Form.Control.Feedback>
        </Col>
        <Col>
        <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control 
            type='text'
            id='image'
            name='image'
            defaultValue={image}
            {...register('image')}
            isInvalid={errors?.image}
            placeholder='Enter Your profile picture Url' />
        </Form.Group>
        <Form.Control.Feedback type='invalid' className='d-block'>
              {errors?.image?.message}
            </Form.Control.Feedback>
        </Col>
       
        <Col>
        <Form.Label>Date Of Birth</Form.Label>
        <DatePicker
            selected={birthYear}
            name='dateOfBirth'
            id='dateOfBirth'
            placeholder='Enter your Date of Birth'
            maxDate={new Date()}
            showYearDropdown
            onChange={(date) => setBirthYear(date)}
            />
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gender</Form.Label>
            <Form.Check  
            type='radio'
            label='Male'
            defaultChecked={gender === 'Male'}
            value="Male"
            
            {...register('gender')} />

            <Form.Check 
            type='radio'
            label='Female'
            value='Female'
            defaultChecked={gender === 'Female'}
            {...register('gender')}
            />
        </Form.Group>
        <Form.Control.Feedback type='invalid' className='d-block'>
                {errors?.gender?.message}
        </Form.Control.Feedback>
        </Col>
        <Col>
            <Form.Group className="mb-3 mt-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control 
                as='textarea'
                type='text'
                defaultValue={bio}
                {...register('bio')}
                isInvalid={errors?.bio}
                placeholder='Enter Your Bio'/>
            </Form.Group>
            <Form.Control.Feedback type='invalid' className='d-block'>
                {errors?.bio?.message}
            </Form.Control.Feedback>
            
        </Col>
      
      <Button variant="primary" type="submit" >
        {contact?.id ? "Update" : "Add Contact"}
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default ContactForm