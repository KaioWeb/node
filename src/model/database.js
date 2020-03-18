var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'concurseiro',// db
    'root',//user
    '1',//pass
    {
        host:'localhost', //host
        dialect: 'mysql' //estrutura
    }
);

module.exports = sequelize;