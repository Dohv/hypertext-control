const express = require('express');
const controller = require('../controllers/usersController');

const router = express.Router();

const authHelpers = require('../services/auth/authHelpers');
const passport = require('../services/auth/local');

router.get('/login', (req, res) => {
  res.render('auth/log-in', {
    documentTitle: 'Hypertext Control Login',
  });
});
router.get('/register', (req, res) => {
  res.render('auth/register', {
    documentTitle: 'Hypertext Control registration',
  });
});
router.post('/register', controller.create);
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/htc',
    failureRedirect: '/auth/login',
    failureFlash: false,
  })
);
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
