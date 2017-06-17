const Project = require('../models/project');

const controller = {};

controller.index = (req, res) => {
  Project.findAll()
    .then(projects => {
      res.json({
        message: 'ok',
        projectsData: projects
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

controller.show = (req, res) => {
  Project.findById(req.params.id)
    .then(project => {
      res.json({
        message: 'ok',
        data: project,
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

controller.create = (req, res) => {
  Project.create({
    user_id: req.body.user_id,
    title: req.body.title,
    data: req.body.data,
  })
  .then(project => {
    res.json({message: 'ok', data: project.title});
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.update = (req, res) => {
  Project.update(
    {
      title: req.body.title,
      data: req.body.data,
    },
    req.params.id
  )
  .then(project => {
    res.json({
      message: 'ok',
      data: project.title,
    });
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.destroy = (req, res) => {
  Project.destroy(req.params.id)
    .then(() => {
      res.json({message: 'project deleted'});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = controller;
