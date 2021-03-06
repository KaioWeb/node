const controllers = {}

//import model e sequelize
var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Role = require('../model/Role');

sequelize.sync()

controllers.get= async (req,res) =>{
    const { id } = req.params;

    const data = await Employee.findAll({
        where:{ id:id },
        include: [ Role ]
    })
    .then( function(data){
        return data;
    })
    .catch(error => {
        return error;
    })

    res.json({success:true, data:data});
}

controllers.list = async(req, res) => {
    const data = await Employee.findAll({
        include:[Role]
    }).then(function(data){
        return data;
    })
    .catch(error => {
        return error; 
    })
    res.set("x-total-count", parseInt(data.length));
    res.json(data);
}

controllers.create = async (req,res) => {
    //data param do post
    const {name, email, address, phone, role } = req.body;
    //create
    const data = await Employee.create({
        name: name,
        email: email,
        address: address,
        phone: phone,
        roleId: role

    })
    .then(function(data){
        return data;
    })
    .catch(error=>{
        console.log(error);
        return error;

    });
    res.status(200).json({
        success: true,
        message: "Salvo com sucesso!",
        data: data
    })
}

controllers.update = async (req,res) => {
    const {id} = req.params;
    console.log(id);
    const {name, email, address, phone, role} = req.body;
    const data = await Employee.update({
        name:name,
        email:email,
        address:address,
        phone:phone,
        roleId:role
    },{
        where:{id:id}
    }).then(function(data){
        return data;
    })
    .catch(erro => {
        return error;
    })
    res.json({success: true, data:data, message:"Update Successful"});
}

controllers.delete = async (req,res) => {
    const {id} = req.body;
    const del = await Employee.destroy({
        where:{id:id}
    })
    res.json({sucess:true, deleted:del, message:"Deleted successful"});
}

// controllers.testdata = async (req, res) => {
//     const response =  await sequelize.sync().then(function(){

//         Role.create({
//             role:'User',
//         })
//         Employee.create({
//             name:'John Morgan',
//             email:'john@gmail.com',
//             address:'Malibu cll 108',
//             phone: '1234567890',
//             roleId:'2'
//         })

//         const data = Employee.findAll();
//         return data;
//     })
//     .catch(error => {
//         return error;
//     })

//     res.json({success: true, data: response});
// }



// controllers.test = (req, res) =>{
//     const data = {
//         name:"john",
//         age:"23",
//         city:"Madrid"
//     }

//     res.json(data);
// }

module.exports = controllers;