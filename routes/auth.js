const express = require('express');
const router = express.Router();

//auth controller
const authCntrl = require('../controllers/auth');

//sign up
router.get('/signup', authCntrl.auth_signup_get);
router.post('/signup', authCntrl.auth_signup_post);

//sign in
router.get('/signin', authCntrl.auth_signin_get);
router.post('/signin', authCntrl.auth_signin_post);

//sign out
router.get('/signout', authCntrl.auth_signout_get);

module.exports = router;