var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const types = [
    {id: 1, name: "samantha", color: "blue"},
    {id: 2, name: "allysa", color: "yellow"},
    {id: 3, name: "olivia", color: "orange"}
  ]
  res.send(types)
});

module.exports = router;
