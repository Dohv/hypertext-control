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
      (user_id, title, data)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [project.user_id, project.title, project.data]
  );
};

Project.update = (project, id) => {
  return db.none(
    `
      UPDATE projects SET
      user_id = $1,
      title = $2,
      data = $3,
      WHERE id = $4
    `,
    [project.user_id, project.title, project.data, id]
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

