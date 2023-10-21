const { Router } = require('express')

const postController = require('../controllers/post')

const postRouter = Router()

//index
postRouter.get('/', postController.index)

//show
postRouter.get('/:id', postController.show)

//create
postRouter.post('/', postController.create)

//destroy
postRouter.delete('/:id', postController.destroy)

module.exports = postRouter