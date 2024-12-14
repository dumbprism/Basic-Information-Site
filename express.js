const express = require('express')
const path = require('path')
const mainPageRouter = require('./Routers/mainPageRouter.js')
const aboutPageRouter = require('./Routers/aboutPageRouter.js')
const contactPageRouter = require('./Routers/contactPageRouter.js')

const app = express()

app.set("view",{
    layout : false
})

app.use(express.static(__dirname + "/public"))

app.use('/',mainPageRouter)
app.use('/about',aboutPageRouter)
app.use('/contact',contactPageRouter)


app.use((req,res) => {
    res.status(400,res.sendFile(__dirname + "/public/404.html"))
})

app.listen(8081,() => {
    console.log('server listening at http://localhost:8081/')
})