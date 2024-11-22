const Article = require('../models/articleModel')
const mongoose = require('mongoose')

//get all Articles

const getArticles = async (req,res) => {
    
    try{
        const articles = await Article.find({}).sort({createdAt: 1})
        res.status(200).json(articles)
    }catch{
        res.status(404).json({error: "cannot get article"})
    }
}

//get a single Article

const getArticle = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Not a Valid ID"})
    }

    const article = await Article.findById(id)

    if(!article){
        res.status(404).json({error: "No such Article"})
    }
    res.status(200).json(article)
}

//create a new Article

const createArticle =  async (req,res) => {
    const { title, category, author, image, desc, content} = req.body

    //add doc to db
    try{
        const article = await Article.create({ title, category, author, image, desc, content})
        res.status(200).json(article)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//update a new Article

const updateArticle = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Not a Valid ID"})
    }

    const article = await Article.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!article){
        res.status(404).json({error: "NO! such Article being UPDATED"})
    }

    res.status(200).json(article)
}

//delete a single article

const deleteArticle = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "Not a Valid ID"})
    }

    const article = await Article.findOneAndDelete({_id: id})

    if(!article){
        res.status(404).json({error: "NO! such Article being DELETED"})
    }

    res.status(200).json(article)

}

module.exports = {
    getArticles,
    getArticle,
    createArticle,
    deleteArticle,
    updateArticle
}