const Sequelize = require('sequelize');
var sequelize = require('./database');

var nametable = 'role'; //nome tabela


var Role = sequelize.define('role', {
    role: Sequelize.STRING
}, {
    timestamps:false
});

module.exports = Role;