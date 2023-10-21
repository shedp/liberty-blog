const Post = require('../models/Post')

const index = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.status(500).json({ Error: err.message })
    }
}

const show = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);
        res.json(post);
    } catch (err) {
        res.status(404).json({ Error: err.message })
    }
}

const create = async (req, res) => {
    try {
        const data = req.body;
        const result = await Post.create(data);
        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
}

const destroy = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Post.findByIdAndDelete(id)
        res.status(204).end()
    } catch (err) {
        res.status(400).json({ Error: err.message })
    }
}

module.exports = {
    index,
    show,
    create,
    destroy
}