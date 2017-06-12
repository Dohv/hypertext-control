const db = require('../db/config');

const Project = {};

Project.findAll = () => {
  return db.query('SELECT * FROM projects ORDER BY id DESC');
};

Project.findById = id => {
  return db.oneOrNone('SELECT * FROM projects WHERE id = $1', [id]);
};

Project.create = project => {
  return db.one(
    `
      INSERT INTO projects
      (title, data)
      VALUES ($1, $2) RETURNING *
    `,
    [project.title, project.data]
  );
};

Project.update = (project, id) => {
  return db.none(
    `
      UPDATE projects SET
      title = $1,
      data = $2,
      WHERE id = $3
    `,
    [project.title, project.data, id]
  );
};

Project.destroy = id => {
  return db.none(
    `
      DELETE FROM projects
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Project;

