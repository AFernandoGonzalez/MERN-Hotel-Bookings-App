import Room from '../models/Room.js'
import Hotel from '../models/Hotel.js'


export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)

    let savedRoom;
    try {
        savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom.id }
            })
        } catch (error) {
            res.json(error)
        }
    } catch (error) {
        res.json(error)
    }
    res.json(savedRoom)
}



export const updateRoom = async (req, res, next) => {
    const roomId = req.params.id;
    const room = req.body

    let updatedRoom;
    try {
        updatedRoom = await Room.findByIdAndUpdate(roomId, { $set: room }, { new: true })
    } catch (error) {
        res.json(error)
    }
    res.json(updatedRoom);
}

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const roomId = req.params.id;
    let deletedRoom;
    // let savedRoom;
    try {
        deletedRoom = await Room.findByIdAndDelete(roomId);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: roomId }
            })
        } catch (error) {
            res.json(error)
        }

    } catch (error) {
        res.json(error);
    }
    res.json(deletedRoom);
}

export const getRoom = async (req, res, next) => {
    const roomId = req.params.id;
    let room;
    try {
        room = await Room.findById(roomId)
    } catch (error) {
        res.json(error)
    }
    res.json(room);

}
export const getAllRooms = async (req, res, next) => {
    let room;
    try {
        room = await Room.find()
    } catch (error) {
        res.json(error)
    };
    res.json(room)
}
