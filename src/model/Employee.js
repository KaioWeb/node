const Sequelize = require('sequelize');
var sequelize = require('./database');
//import role for RoleId
var Role = require ('../model/Role');
var nametable = 'empleado'; //nome tabela

var Employee = sequelize.define(nametable, {
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING,
    address:Sequelize.STRING,
    phone:Sequelize.BIGINT,
    roleId:{
        type: Sequelize.INTEGER,
        references:{
            model:Role,
            key: 'id'
        }
    }
    
})

Employee.belongsTo(Role);

module.exports = Employee;