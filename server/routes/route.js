import express from 'express'

import {addUser,getUsers,getUser,editUser,deleteUser} from '../controller/user-controller.js'

const router=express.Router()


router.post('/add',addUser)
router.get('/all',getUsers)
router.get('/edit/:id',getUser)
router.post('/edit/:id',editUser) 
router.delete('/:id',deleteUser)

export default router 