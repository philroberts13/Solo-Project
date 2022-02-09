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
  const place = await Place.findOne(req.params.id);

  return res.json(place);
  }));

  router.post('/', asyncHandler(async function (req, res) {
      const id = await Place.create(req.body);
      return res.redirect(`${req.baseUrl}/${id}`);
    })
  );

  router.put('/:id',asyncHandler(async function (req, res) {
      const id = await Place.update(req.body);
      const place = await Place.one(id);
      return res.json(place);
    })
  );

  router.delete("/:id", asyncHandler(async function (req, res) {
    const id = await Place.deleteItem(req.params.id);
    return res.json({ id });
  }));

module.exports = router;
