'use strict'
/**
 * Plantilla de una migration, enombre del archivo está compuesto por: timestamp-create-plantilla.js
 *
 * timestamp: es la marca de tiempo de creación del archivo, hay que tener en cuenta que el ORM ejecuta las migraciones en orden de tiempo, por lo que si tenemos un
 * caso donde una tabla T1 tenga una FK de una tabla T2, la tabla T2 tendrá que tener el timeStamp más antiguo y la tabla T1 el más nuevo para no tener un REFERENCE error
 *
 * create: es lo que se hace en la migración que
 *
 * plantilla: es el nombre de la tabla T1
 *
 * js: la extensión del archivo
 *
 *  ver: https://sequelize.org/v5/manual/data-types.html para documentación sobre los TYPE de data soportada a nivel de migración
 * */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plantilla', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: { // Columna que guarda la FK de un supuesto USER
        type: Sequelize.INTEGER,
        references: { // El objeto REFERENCES define las propiedades de la relación
          allowNull: false, // Relación opcional? es decir que una plantilla pertenezca a ningun user (debe coincidir con le definido en los modelos)
          model: 'users', // El literal del modelo que al que pertenece esta llave
          key: 'id' // la PK de la tabla users
        }
      },
      nombre: {
        type: Sequelize.STRING
      },
      createdAt: { // Este campo no debe tocarse
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: { // Este campo no debe tocarse
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plantilla')
  }
}
