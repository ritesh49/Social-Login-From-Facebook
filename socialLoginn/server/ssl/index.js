const express=require('express')
const fs=require('fs')
const https=require('https')
const path=require('path')

const app=express()

const directoryToServe='client'
const port=3000
// app.use('/',express.static(path.join(__dirname,'..',directoryToServe)))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"../..","client", 'index.html'))
  })
const httpsOptions={
    cert:fs.readFileSync(path.join(__dirname,'cert.pem')),
    key:fs.readFileSync(path.join(__dirname,'cert.key'))
}

https.createServer(httpsOptions,app).listen(port,function(){
    console.log(`Serving the ${directoryToServe}/ directory at https://localhost:${port}`)
})