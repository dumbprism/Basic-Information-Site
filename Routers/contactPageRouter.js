const {Router} = require('express')
const path = require('path')


const contactPageRouter = Router()

contactPageRouter.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname + "/public",'contact-me.html'))
} )


module.exports = contactPageRouter