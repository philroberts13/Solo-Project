const express = require('express')
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
    const reviews = await reviews.findAll();
    return res.json(reviews);
  }));

router.post('/', asyncHandler(async function (req, res) {
    const review = await Review.create(req.body);
    return res.json(review);
  })
);

// router.get('/:id', asyncHandler(async function(req, res) {
//   const review = await review.findByPk(req.params.id);

//   return res.json(review);
//   }));



  router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const review = await review.findByPk(id);
        await review.destroy();
        return res.json({ message: 'success' });
    })
);

router.put('/:id',asyncHandler(async function (req, res) {
    const { } = req.body;
    await review.update({  }, {where: {id: req.params.id} })
    const review = await review.findByPk(req.params.id)
    return res.json(review);


return res.json()
})
);



module.exports = router;
