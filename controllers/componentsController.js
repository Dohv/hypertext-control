const Component = require('../models/component');

const controller = {};

controller.index = (req, res) => {
  Component.findAll()
    .then(components => {
      res.json({
        message: 'ok',
        componentsData: components
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

controller.show = (req, res) => {
  Component.findById(req.params.id)
    .then(component => {
      res.json({
        message: 'ok',
        data: component,
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

controller.create = (req, res) => {
  Component.create({
    title: req.body.title,
    data: req.body.data,
  })
  .then(component => {
    res.json({message: 'ok', data: component.title});
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.update = (req, res) => {
  Component.update(
    {
      title: req.body.title,
      data: req.body.data,
    },
    req.params.id
  )
  .then(component => {
    res.json({
      message: 'ok',
      data: component.title,
    });
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

controller.destroy = (req, res) => {
  Component.destroy(req.params.id)
    .then(() => {
      res.json({message: 'component deleted'});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = controller;
