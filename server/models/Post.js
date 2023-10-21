const mongoose = require('mongoose')
const postSchema = require('../schemas/post')
const Post = mongoose.model('Post', postSchema)


module.exports = Post