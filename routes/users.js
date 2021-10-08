var express = require('express');
var router = express.Router();
var User = reqlib('/models/user.js')

router.get('/', async function (req, res) {
    let items = await User.listAll();
    res.send({
        'data': items,
        'count': items.length
    });
});

router.post('/', async function (req, res) {
    let user = await User.add(req.body || {})
    res.send(user)
});

module.exports = router;
