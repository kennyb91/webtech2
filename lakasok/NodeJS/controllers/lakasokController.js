const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Lakasok } = require('../models/lakasok');


// => localhost:3000/lakasok/

router.get('/', (req, res) => {
    Lakasok.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Lakasok : ' + JSON.stringify(err, undefined, 2)); }
    });

});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('Nincs ilyen számú lakás: ${req.params.id}');

    Lakas.findById(req.params.id), (err, docs) => {
        if (!err) { res.send(docs) }
        else { console.log('Error in Retriving Lakasok :' + JSON.stringify(err, undefined, 2)) }
    };
});

router.post('/', (req, res) => {
    var lak = new Lakasok({
        szam: req.body.szam,
        alapterulet: req.body.alapterulet,
        legter: req.body.legter
    });

    lak.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Lakasok Save :' + JSON.stringify(err, undefined, 2)); }
    });

});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('Nincs ilyen számú lakás: ${req.params._id}');

    var lak = {
        szam: req.body.szam,
        alapterulet: req.body.alapterulet,
        legter: req.body.legter
    };
    Lakasok.findByIdAndUpdate(req.params.id, { $set: lak }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc) }
        else { console.log('Error in Updating Lakasok : ' + JSON.stringify(err, undefined, 2)) }
    });

})

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('Nincs ilyen számú lakás: ${req.params.id}');

    Lakasok.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) { res.send(doc) }
        else { console.log('Error in Lakasok Delete : ' + JSON.stringify(err, undefined, 2))}
    });

})

module.exports = router;