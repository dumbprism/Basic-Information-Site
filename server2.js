const fs = require('fs')

const rs = fs.createReadStream('killbill.md')

rs.on('open',() => {
    console.log('The file is open')
})


