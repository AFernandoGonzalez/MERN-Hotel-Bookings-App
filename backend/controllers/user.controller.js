import User from '../models/User.js'

export const createUser = async (req, res, next) => {
    const newUser = new User(req.body);
    let result;
    try {
        result = await newUser.save()
    } catch (error) {
        res.json(error)
    }
    res.json(result)
}

export const updateUser = async (req, res, next) => {
    const userId = req.params.id;
    const user = req.body

    let result;
    try {
        result = await User.findByIdAndUpdate(userId, { $set: user }, { new: true })
    } catch (error) {
        res.json(error)
    }
    res.json(result);
}

export const deleteUser = async (req, res, next) => {
    const userId = req.params.id;
    let result;
    try {
        result = await User.findByIdAndDelete(userId);
    } catch (error) {
        res.json(error);
    }
    res.json(result);
}

export const getUser = async (req, res, next) => {
    const userId = req.params.id;
    let result;
    try {
        result = await User.findById(userId)
    } catch (error) {
        res.json(error)
    }
    res.json(result);

}
export const getAllUsers = async (req, res, next) => {
    let result;
    try {
        result = await User.find()
    } catch (error) {
        res.json(error)
    };
    res.json(result)
}
