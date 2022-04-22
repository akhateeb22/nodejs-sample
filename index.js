const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use('/hello', (req, res, next)=>{
    res.send('Hello there!');
})

app.use('/bye', (req, res, next) => {
    res.send('Bye Bye!');
});
console.log('sdfsssdfasdsadsdf');

app.listen(8001, (err)=>{
    if(err) console.log(err);
    else{
        console.log('App is running!!');
    }
})