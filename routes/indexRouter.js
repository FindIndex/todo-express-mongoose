var express = require('express');
var router = express.Router();
var Todo = require('../lib/mongoose').Todo

// GET /
router.get('/', (req, res) => {
    // res.send('GET index');
    Todo.find((err, result) => {
        res.render('./index', {
            items: result
        });
    })

})

// POST /
router.post('/', (req, res) => {
    // res.send('POST index');
    // console.log(req.body.item)
    if (req.body.item) {
        var newItem = new Todo({
            content: req.body.item
        })
        newItem.save((err, result) => {
            // console.log(result)
        })
    }

    res.redirect('/');
})

module.exports = router