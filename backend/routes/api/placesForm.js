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
  console.log(req.body, "a'lsdkjf;alksdjfa;lksdjfa;lksdjf;alksdjf;alsdkfja;lsdkfja;sldkfja;lskdjf;alskdjfa;lsdkfja;sldkfja;sldkfj")
    const place = await Place.create(req.body);
    return res.json(place);
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
