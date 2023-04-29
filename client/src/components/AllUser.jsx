import React, { useEffect, useState } from 'react'

import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material'
import { deleteUser, getUsers } from '../services/api'
import { Link } from 'react-router-dom'

const StyledTable= styled(Table)`
width:90%;
margin:50px auto 0 auto;
`
const THead=styled(TableRow)`
background:#000000;
& > th {
  color:#fff;
  font-size:15px;
}
`
const TBody=styled(TableRow)`
& > td {
  font-size:10px;
}
`

function AllUser() {

  const [users, setUsers]=useState([])
    useEffect(()=>{
         getAllUsers()
    },[])

   const getAllUsers=async()=>{
      const response=await getUsers()
      setUsers(response.data)
   }

   const deleteUserDetails=async(id)=>{
    await deleteUser(id)
     getAllUsers()
   }


  return (
    <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
        {
          users.map(user =>( 
          <TBody>
            <TableCell>{user._id[12]}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
                <Button variant='contained' style={{marginRight:'10px',marginBottom:'10px'}} component={Link} to={`/edit/${user._id}`} >EDIT</Button>
                <Button variant='contained' color='secondary' onClick={()=>deleteUserDetails(user._id)}>DELETE</Button>
            </TableCell>
          </TBody>
        )) }
        </TableBody>
    </StyledTable>
  )
}

export default AllUser