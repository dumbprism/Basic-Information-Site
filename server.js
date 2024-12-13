const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service : 'gmail',

    auth : {
        user : 'nodetester7@gmail.com',
        pass  : 'Omsairam@19'
    }
}
)

const mailOptions = {
    from :  'nodetester7@gmail.com',
    to : 'arhantk915@gmail.com',
    subject : 'testing the capability of my server',
    text : 'Hi, hope you are doing well. Please ignore this message, since this was used to check if my server is able to send messages or not . Happy hacking '
    
}

transporter.sendMail(mailOptions,(err) => {
    if(err){
        console.error(err)
    }else{
        console.log('email sent sucessfully !')
    }
})