const express = require('express');
const controller = require('../controllers/componentsController');
const authHelpers = require('../services/auth/authHelpers');

const componentRoutes = express.Router();

componentRoutes.get('/', controller.index);
componentRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('controllers/components-add', {
    documentTitle: 'Components!',
  });
});
componentRoutes.get('/edit/:id', authHelpers.loginRequired, controller.edit);
componentRoutes.get('/:id', controller.show);
componentRoutes.post('/', authHelpers.loginRequired, controller.create);
componentRoutes.put('/:id', authHelpers.loginRequired, controller.update);
componentRoutes.delete('/:id', authHelpers.loginRequired, controller.destroy);

module.exports = componentRoutes;

