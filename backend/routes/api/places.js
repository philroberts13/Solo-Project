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


router.get('/:id', asyncHandler(async function(req, res) {
  const place = await Place.findByPk(req.params.id);
  // const reviews = await reviews.findAll();


  return res.json(place);
  }));

  router.get('/:id', asyncHandler(async function(req, res) {
    const reviews = await reviews.findAll();
    return res.json(reviews);
  }));

  router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const place = await Place.findByPk(id);
        await place.destroy();
        return res.json({ message: 'success' });
    })
);



module.exports = router;
