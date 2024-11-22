const express = require('express')
const router = express.Router()
const { getArticles, getArticle, createArticle, deleteArticle, updateArticle } = require('../controllers/articleController')
const { postContact } = require('../controllers/contactController')

require('dotenv').config()

//GET all articles
router.get('/', getArticles)

//GET a single article
router.get('/:id', getArticle )

//POST a new article
router.post('/', createArticle )

//DELETE a single article
router.delete('/:id', deleteArticle )

//UPDATE an article
router.patch('/:id', updateArticle )

router.post('/contact', postContact)

module.exports = router