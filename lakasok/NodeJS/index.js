const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var lakasokController = require('./controllers/lakasokController.js');

var app = express();
app.use(bodyParser.urlencoded({
    extender: true
}));
app.use(cors({origin: 'http://localhost:4200'}));

app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/lakasok', lakasokController);