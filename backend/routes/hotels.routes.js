import express from 'express';
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.controller.js';
import { veryfyIsAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// create
router.post('', veryfyIsAdmin, createHotel)
// update
router.put('/:id', veryfyIsAdmin, updateHotel)
// delete
router.delete('/:id', veryfyIsAdmin, deleteHotel)
// get
router.get('/:id', getHotel)
// get all
router.get('/', getAllHotels)

export default router