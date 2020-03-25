//import express
const express = require('express');
const app = express();
var cors = require('cors')

//settings port
app.set('port', process.env.POST || 4000);

//middleware
app.use(cors());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    next();
});


//import routes
const employeeRouters = require('./routes/employeeRoute');
//Route
app.use('/employee', employeeRouters);


app.listen(app.get('port'), () => {
    console.log("servidor na porta: " + app.get('port'));
})

