const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    alias: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = postSchema