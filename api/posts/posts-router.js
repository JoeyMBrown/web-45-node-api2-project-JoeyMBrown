// implement your posts router here
const express = require('express');
const router = express.Router();
const Posts = require('./posts-model');

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Returns an array of all post objects'})
})

router.get('/:id', (req, res) => {
    res.status(200).json({ message: 'returns the post object with the specified id'})
})

router.get('/:id/comments', (req, res) => {
    res.status(200).json({ message: 'returns array of all comments with post id'})
})


router.post('/', (req, res) => {
    res.status(200).json({ message: 'Creates a post, req.body returns newly created post'})
})


router.put('/:id', (req, res) => {
    res.status(200).json({ message: 'Updates post using id, and data from req.body, returns modified post.'})
})


router.delete('/:id', (req, res) => {
    res.status(200).json({ message: 'Removes post at specified id, returns deleted post'})
})
module.exports = router;