const express = require('express')
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hello browser");});

app.post('/login',(req,res)=>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName =="mmamb" && req.body.password=="3c7f506040bffb0aada69cfd5b101f4b"){
        res.send("welcome")
    }else{
        res.send("who are you");
    }
});

 // app.listen(port, ()=>{});

// const fs = require('fs');
// const { Http2ServerRequest } = require('http2');

//...
const https = require('https')
const fs = require ('fs')

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
    passphrase:"P@ssw0rd"
}, app).listen(3000, () => {
    console.log('listing...')
})


