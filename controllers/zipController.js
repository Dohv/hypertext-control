const Project = require('../models/project');
/* zip file creation module */
const AdmZip = require('adm-zip');
/* file generation for zip */
const index_html = require('../gen/index_html');
const style_css = require('../gen/style_css'); 

const controller = {};

controller.createZip = (req, res) => {
  Project.findById(req.params.id)
    .then(project => {
      const filename = 'html_css';
      res.set({
        'Content-Type': 'application/zip',
        'Content-disposition': `attachment; filename=${filename}.zip`
      });
      console.log('project title: ' + project.title);
      res.send(makeZip(project));
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

function makeZip(data) {
  const zip = new AdmZip();
  /* add buffers to zip */
  index_html(zip, data);
  style_css(zip, data);
  return zip.toBuffer();
};

module.exports = controller;

