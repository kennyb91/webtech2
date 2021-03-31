const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LakasokDB', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {

    if (!err)
        console.log('MongoDB connection ok!');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));

});
mongoose.pluralize(null);
module.exports = mongoose;