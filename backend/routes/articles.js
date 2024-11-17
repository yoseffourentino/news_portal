const express = require('express')
const router = express.Router()
const Article = require('../models/articleModel')

require('dotenv').config()

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
    const { title, category, author, image, desc, content} = req.body
    try{
        const article = Article.create({ title, category, author, image, desc, content})
        res.status(200).json(article)
    }catch(error){
        res.status(400).json({error: error.message})
    }
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