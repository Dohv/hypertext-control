const express = require('express');
const authHelpers = require('../services/auth/authHelpers');

console.log('Whaaaaat');

const htcRoutes = express.Router();
console.log('Whaaaaat 2');

htcRoutes.get('/', authHelpers.loginRequired, (req, res) => {
  res.render('htc/htc', {
    user: req.user
  });
});
// htcRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
//   res.render('controllers/projects-add', {
//     documentTitle: 'Projects!',
//   });
// });
// projectRoutes.get('/edit/:id', authHelpers.loginRequired, controller.edit);
console.log('Whaaaaat 4');
// htcRoutes.get('/:id', authHelpers.loginRequired, controller.show);
// htcRoutes.post('/', authHelpers.loginRequired, controller.create);
// htcRoutes.put('/:id', authHelpers.loginRequired, controller.update);
// htcRoutes.delete('/:id', authHelpers.loginRequired, controller.destroy);

module.exports = htcRoutes;
