const express = require('express')
const path = require('path')

const app = express()

app.set("view",{
    layout : false
})

app.use(express.static(__dirname + "/public"))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname + "/public",'index.html'))
})

app.use((req,res) => {
    res.status(400,res.sendFile(__dirname + "/public/404.html"))
})

app.listen(8081,() => {
    console.log('server listening at http://localhost:8081/')
})