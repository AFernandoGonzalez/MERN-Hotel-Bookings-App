import express from 'express';
import { updateUser, deleteUser, getUser, getAllUsers } from '../controllers/user.controller.js'
import { veryfyIsAdmin, veryfyToken, veryfyUser } from '../utils/verifyToken.js';

const router = express.Router();

// middleware
// router.get('/checkauthentication', veryfyToken, (req, res, next) => {
//     res.send('hi user you are logged in')
// })
// router.get('/checkuser/:id', veryfyUser, (req, res, next) => {
//     res.send('Hi user you are logged in and you can delete your account')
// })
// router.get('/checkadmin/:id', veryfyIsAdmin, (req, res, next) => {
//     res.send('Hi user you are logged in and you can delete all account')
// })

// update
router.put('/:id', veryfyUser, updateUser)
// delete
router.delete('/:id', veryfyUser, deleteUser)
// get
router.get('/:id', veryfyUser, getUser)
// get all
router.get('/', veryfyIsAdmin, getAllUsers)


export default router