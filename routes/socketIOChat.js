import express from 'express';
import path from 'path';

var router = express.Router();

/!* GET users listing. *!/
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = router;