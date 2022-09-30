import express from 'express';
import { veryfyIsAdmin } from '../utils/verifyToken.js';
import { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms } from '../controllers/room.controller.js'

const router = express.Router();

// create
router.post('/:hotelId', veryfyIsAdmin, createRoom)
// update
router.put('/:id', veryfyIsAdmin, updateRoom)
// delete
router.delete('/:id/:hotelId', veryfyIsAdmin, deleteRoom)
// getd
router.get('/:id', getRoom)
// get all
router.get('/', getAllRooms)


export default router