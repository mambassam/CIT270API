const https = require('https');
const fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser');

const port = 443;

const app = express();

const md5 = require('md5');

let invalidloginAttempts

app.use(bodyParser.json());

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hello browser");
});

app.post('/login',(req,res)=>{
    console.log(JSON.stringify(req.body));
    if(invalidloginAttempts>=5){
        res.status(403); //unauthorized
    }
    else if(req.body.userName =="mmamb" && md5(req.body.password)=="feabbe95a07d5b23f9054a00e3c50f82"){
        res.send("welcome")
    }else{
        invalidloginAttempts++;
        console.log(invalidloginAttempts+"invalid attempts");
        res.status(403); //unauthorized
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
}, app).listen(443, () => {
    console.log('listing...')
})


