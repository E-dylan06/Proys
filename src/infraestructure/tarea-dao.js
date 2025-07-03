const { getConnection } = require('./database-connection'); // Importar la función de conexión


function list(tabla) {
  return new Promise((resolve, reject) => {
    const conexion = getConnection(); // Obtener la conexión
    conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
}

function selectById(tabla, id) {
  return new Promise((resolve, reject) => {
    const conexion = getConnection(); // Obtener la conexión
    conexion.query(`SELECT * FROM ${tabla} WHERE id = ${id}`, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
}

function add(tabla, data) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO ${tabla} (nombre,estado) VALUES (?, ?)`;
    const values = [data.nombre, data.estado];
    const conexion = getConnection(); // Obtener la conexión
    conexion.query(query, values, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
}

function update(tabla, id, data) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE ${tabla} SET nombre = ?, estado = ? WHERE id = ?`;
    const values = [data.nombre, data.estado, id];
    const conexion = getConnection(); // Obtener la conexión
    conexion.query(query, values, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
}

function deleteById(tabla, id) {
  return new Promise((resolve, reject) => {
    const conexion = getConnection(); // Obtener la conexión
    conexion.query(`DELETE FROM ${tabla} WHERE id = ${id}`, (error, result) => {
      return error ? reject(error) : resolve(result);
    });
  });
}

module.exports = {
  list,
  selectById,
  add,
  update,
  deleteById,
};
