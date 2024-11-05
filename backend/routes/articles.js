const express = require('express')

const router = express.Router()

//GET all articles
router.get('/', (req,res) => {
    res.json({mssg:'GET all articles'})
})

//GET a single article
router.get('/:id', (req,res) => {
    res.json({mssg:'GET a single article'})
})

//POST a new article
router.post('/', (req,res) => {
    res.json({mssg:'POST a new article'})
})

//DELETE a single article
router.delete('/:id', (req,res) => {
    res.json({mssg:'DELETE a single article'})
})

//UPDATE an article
router.patch('/:id', (req,res) => {
    res.json({mssg:'UPDATE an article'})
})
module.exports = router