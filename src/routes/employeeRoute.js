const express = require('express');
const router = express.Router();

const employeedController = require('../controllers/employeeController');

// router.get('/datatest', employeedController.testdata);

// router.get('/save', (req,res) => {
//     res.json({status:'Employeed Save'});
// });

router.get('/list', employeedController.list);

router.post('/create', employeedController.create);

router.get('/get/:id', employeedController.get);



module.exports = router;