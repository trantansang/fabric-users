var express = require('express');
var router = express.Router();
var User = reqlib('/models/user.js')
/* GET users listing. */
router.get('/', async function (req, res) {
    let items = await User.listAll();
    res.send({
        'data': items
    });
});

module.exports = router;
