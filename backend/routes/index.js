const express = require('express');
const router = express.Router();
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const apiRouter = require('./api')

router.use('/api', apiRouter)

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Howdy!');
});

module.exports = router;
