import React, { useEffect, useState } from 'react'

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material'
import { getUser,editUser } from '../services/api'
import {useNavigate,useParams} from 'react-router-dom' 


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


function EditUser() {

    const [user,setUser]=useState(defaultValue)

    const navigate=useNavigate();

    const {id}=useParams()

    useEffect(()=>{
     loadUserDetails()
    },[])

    const loadUserDetails=async()=>{
        const response=await getUser(id)
        setUser(response.data)
        console.log(response.data);
    }

    const formHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
     }
  const editUserDetails=async()=>{
   await editUser(user,id)
   navigate('/all')
  }

  return (
    <Container>
        <Typography variant='h4'>Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name='name' onChange={(e)=>formHandler(e)} value={user.name} />
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input name='username' onChange={(e)=>formHandler(e)} value={user.username} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name='email' onChange={(e)=>formHandler(e)} value={user.email} />
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input name='phone' onChange={(e)=>formHandler(e)} value={user.phone} />
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={()=>editUserDetails()}>Edit User</Button>
        </FormControl>
    </Container>
  )
}

export default EditUser