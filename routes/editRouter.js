var express = require('express');
var router = express.Router();
var Todo = require('../lib/mongoose').Todo

// GET /toggle/Id
router.get('/delete/:itemId', (req, res) => {
    console.log(req.params.itemId)

    Todo.deleteOne({
        _id: req.params.itemId
    }, (err, result) => {
        Todo.find((err, result1) => {
            res.redirect('/');
        })
    })

})

// POST /toggle/Id
router.get('/toggle/:itemId', (req, res) => {
    Todo.findById(req.params.itemId, (err, result) => {
        Todo.findByIdAndUpdate(req.params.itemId, {
            isFinished: !result.isFinished
        }, (err1, resule1) => {
            res.redirect('/');;
        })
    })
})


// POST /edit/Id
router.post('/edit/:itemId', (req, res) => {
    Todo.findByIdAndUpdate(req.params.itemId, {
        content: req.body.item
    }, (err, result) => {
        res.redirect('/');;
    })
})

module.exports = router