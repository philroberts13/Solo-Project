const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Place } = require('../../db/models');

const router = express.Router();

router.put('/:id',asyncHandler(async function (req, res) {
        const { id, name, address, city, state, country, price } = req.body;
        await Place.update({ id, name, address, city, state, country, price }, {where: {id: req.params.id} })
        const place = await Place.findByPk(req.params.id)
        return res.json(place);


    return res.json()
})
);

module.exports = router;

// const placeId = parseint(req.params.id, 10);
// const currentPlace = await Place.findByPk(placeId);

// const { id, name, address, city, state, country, price } = req.body;
// const id = await currentPlace.update(places)
// const place = await Place.update({
//     id,
//     name,
//     address,
//     city,
//     state,
//     country,
//     price
// }, {where: req.params.id})
// const place = await Place.update(req.body);
// return res.json(place);


//

// return res.json(place);

// const { id } = req.params;
// const place = await Place.findByPk(id);
// await place.update(req.body);
