const express = require('express')
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hello browser");});

app.post('/login',(req,res)=>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName =="mmamb" && req.body.password=="blash3c7f506040bffb0aada69cfd5b101f4b"){
        res.send("welcome")
    }else{
        res.send("who are you");
    }
});

app.listen(port, ()=>{});

