var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {
    res.send("Neeraj API is running");
})

module.exports = router;