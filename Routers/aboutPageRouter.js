const {Router} = require('express')
const path = require('path')


const aboutPageRouter = Router()

aboutPageRouter.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname + "/public",'about.html'))
} )


module.exports = aboutPageRouter