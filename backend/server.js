require('dotenv').config()
const express = require('express')
const articlesRoutes = require('./routes/articles')
const mongoose = require('mongoose')
const cors = require('cors')

//express app
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/articles', articlesRoutes)

//connect yo db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for request
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        });
    })
    .catch((err) => {
        console.log(err)
    })

