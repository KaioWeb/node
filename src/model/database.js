var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'concurseiro',// db
    'root',//user
    '',//pass
    {
        host:'localhost', //host
        dialect: 'mysql' //estrutura
    }
);

module.exports = sequelize;