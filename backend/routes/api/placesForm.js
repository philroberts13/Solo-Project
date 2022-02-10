const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Place } = require('../../db/models');

const router = express.Router();


router.get('/', asyncHandler(async function(req, res) {

    return res.json();
  }));

router.post('/', asyncHandler(async function (req, res) {
    const place = await Place.create(req.body);
    return res.json(place);
  })
);

module.exports = router;
