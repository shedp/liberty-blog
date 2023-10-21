require('dotenv').config()


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const postRouter = require('./routes/post')

const app = express()

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(cors())
app.use(express.json())
app.use('/posts', postRouter)

module.exports = app