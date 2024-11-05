require('dotenv').config()
const express = require('express')
const articlesRoutes = require('./routes/articles')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/articles', articlesRoutes)

//listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
});