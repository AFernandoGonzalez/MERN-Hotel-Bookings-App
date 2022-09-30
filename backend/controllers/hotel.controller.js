import Hotel from '../models/Hotel.js'

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    let result;
    try {
        result = await newHotel.save()
    } catch (error) {
        res.json(error)
    }
    res.json(result)
}

export const updateHotel = async (req, res, next) => {
    const hotelId = req.params.id;
    const hotel = req.body

    let result;
    try {
        result = await Hotel.findByIdAndUpdate(hotelId, { $set: hotel }, { new: true })
    } catch (error) {
        res.json(error)
    }
    res.json(result);
}

export const deleteHotel = async (req, res, next) => {
    const hotelId = req.params.id;
    let result;
    try {
        result = await Hotel.findByIdAndDelete(hotelId);
    } catch (error) {
        res.json(error);
    }
    res.json(result);
}

export const getHotel = async (req, res, next) => {
    const hotelId = req.params.id;
    let result;
    try {
        result = await Hotel.findById(hotelId)
    } catch (error) {
        res.json(error)
    }
    res.json(result);

}
export const getAllHotels = async (req, res, next) => {
    let result;
    try {
        result = await Hotel.find()
    } catch (error) {
        res.json(error)
    };
    res.json(result)
}

// exports.createHotel = createHotel;
// exports.updateHotel = updateHotel;
// exports.deleteHotel = deleteHotel;
// exports.getHotel = getHotel;
// exports.getAllHotels = getAllHotels;