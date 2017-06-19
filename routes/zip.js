const express = require('express');
const authHelpers = require('../services/auth/authHelpers');
const controller = require('../controllers/zipController');

const zipRoutes = express.Router();

zipRoutes.get('/:id', authHelpers.loginRequired, controller.createZip);

module.exports = zipRoutes;
