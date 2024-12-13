const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req,res) => {
    const q = url.parse(req.url,true)
    const filename = '.' + q.pathname
    

    fs.readFile(filename,(err,data) => {

       if(err){

        fs.readFile('404.html',(err404,data404) => {

            if(err404){
                res.writeHead(404,{
                    'Content-Type' : "text/html"
                })
                res.write('<h1> some unknown error occurred, please try again </h1>')
            }

            res.writeHead(404,{'Content-Type' : 'text/html'});
            res.write(data404)
            return res.end()

        })

       } 
       else{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data)
        return res.end()
       }
    })
}).listen(8081)