import User from '../models/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
    })

    let result;
    try {
        result = await newUser.save()
    } catch (error) {
        res.json(error)
    }
    res.json(result.toObject({ getters: true }));
}

export const login = async (req, res, next) => {
    const username = req.body.username
    let userPassword = req.body.password;
    let user;

    try {
        user = await User.findOne({ username });
        if (!user) return res.json('Coulnt find username')

        const isPasswordCorrect = await bcrypt.compare(userPassword, user.password)
        if (!isPasswordCorrect) return res.json('Wrong Password')

    } catch (error) {
        res.json(error)
    }

    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT)
    console.log(token);
    const { password, isAdmin, ...otherDetails } = user._doc;

    res.cookie("access_token", token, {
        httpOnly: true,
    }).json(otherDetails);
} 