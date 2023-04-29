import React, { useState } from 'react'

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import { addUser } from '../services/api'
import {useNavigate} from 'react-router-dom' 


const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div {
    margin-top:20px;
}
`


const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''
}


function AddUser() {

    const [user,setUser]=useState(defaultValue)

    const navigate=useNavigate();

    const formHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
     }
  const addUserDetails=async()=>{
   await addUser(user)
   navigate('/all')
  }

  return (
    <Container>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name='name' onChange={(e)=>formHandler(e)} />
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input name='username' onChange={(e)=>formHandler(e)} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name='email' onChange={(e)=>formHandler(e)} />
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input name='phone' onChange={(e)=>formHandler(e)} />
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={()=>addUserDetails()}>Add User</Button>
        </FormControl>
    </Container>
  )
}

export default AddUser