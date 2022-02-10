
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const placesRouter = require('./places.js')
const placesFormRouter = require('./placesForm.js')
const editFormRouter = require('./editForm.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/places', placesRouter);
router.use('/placesForm', placesFormRouter);
router.use('/editForm', editFormRouter);



module.exports = router;

// router.post('/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });


// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');


//     // GET /api/set-token-cookie
//     router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//       const user = await User.findOne({
//           where: {
//             username: 'Demo-lition'
//           }
//         });
//       setTokenCookie(res, user);
//       return res.json({ user });
//     }));

//     // GET /api/restore-user
//   const { restoreUser } = require('../../utils/auth.js');
//   router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//       return res.json(req.user);
//     }
//   );

//   // GET /api/require-auth
//   const { requireAuth } = require('../../utils/auth.js');
//   router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//       return res.json(req.user);
//     }
//   );
