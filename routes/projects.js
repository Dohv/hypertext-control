const express = require('express');
const controller = require('../controllers/projectsController');
const authHelpers = require('../services/auth/authHelpers');

const projectRoutes = express.Router();

projectRoutes.get('/', controller.index);
projectRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('controllers/projects-add', {
    documentTitle: 'Projects!',
  });
});
projectRoutes.get('/edit/:id', authHelpers.loginRequired, controller.edit);
projectRoutes.get('/:id', controller.show);
projectRoutes.post('/', authHelpers.loginRequired, controller.create);
projectRoutes.put('/:id', authHelpers.loginRequired, controller.update);
projectRoutes.delete('/:id', authHelpers.loginRequired, controller.destroy);

module.exports = projectRoutes;
