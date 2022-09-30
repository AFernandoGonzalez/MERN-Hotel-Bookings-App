import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config()

import authRoute from './routes/auth.routes.js'
import usersRoute from './routes/users.routes.js'
import hotelsRoute from './routes/hotels.routes.js'
import roomsRoute from './routes/rooms.routes.js'
import cookieParser from 'cookie-parser'

const app = express();

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@coursesdb.51wwjr8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`


const connect = async () => {
    try {
        await mongoose.connect(URI);
        console.log('conected db');
    } catch (error) {
        throw error
    }
};

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

// app.use((err, req, res, next) => {
//     return res.json('Hi error handler')
// })

const PORT = process.env.PORT
app.listen(PORT, () => {
    connect()
    console.log(`Server running in port ${PORT}`);
})