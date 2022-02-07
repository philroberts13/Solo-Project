const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Place } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
    const places = await Place.findAll();
    return res.json(places);
  }));

  router.post('/', asyncHandler(async function (req, res) {
      const id = await Place.create(req.body);
      return res.redirect(`${req.baseUrl}/${id}`);
    })
  );


module.exports = router;
