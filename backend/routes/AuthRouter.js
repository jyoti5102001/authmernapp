const router = require('express').Router();
const { signupValidation, loginValidation } = require('../middlewares/AuthValidation');
const { login } = require('../controllers/AuthController');
const { signup } = require('../controllers/AuthController');

// router.post('/login', loginValidation, (req, res) => {
//     res.send('Login successful');
// });

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

module.exports = router;