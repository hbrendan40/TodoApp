const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

//bodyParser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/key').mongoURI;

mongoose.connect(db)
    .then(()=> console.log('MongooseDB Connected...'))
    .catch(err=> console.log(err));



    

app.use('/api/items', items);

if (process.env.NODE_ENV=== 'production'){
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.send(path.resolve(__dirname, 'client', 'build', 'index.html'));

    });
}



const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log(`Server started on ${port}`));