const mongoose = require('mongoose');

var Lakasok = mongoose.model('lakasok', {
    szam: { type: String },
    alapterulet: { type: String },
    legter: { type: String }
});

module.exports = { Lakasok };