const db = require('../db/config');

const Component = {};

Component.findAll = () => {
  return db.query('SELECT * FROM components ORDER BY id DESC');
};

Component.findById = id => {
  return db.oneOrNone('SELECT * FROM components WHERE id = $1', [id]);
};

Component.create = component => {
  return db.one(
    `
      INSERT INTO components
      (title, data)
      VALUES ($1, $2) RETURNING *
    `,
    [component.title, component.data]
  );
};

Component.update = (component, id) => {
  return db.none(
    `
      UPDATE components SET
      title = $1,
      data = $2,
      WHERE id = $3
    `,
    [component.title, component.data, id]
  );
};

Component.destroy = id => {
  return db.none(
    `
      DELETE FROM components
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Component;

