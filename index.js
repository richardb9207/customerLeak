const express = require('express');
const app = express();
const { config }= require('./config/index');
const customerLeakApi = require('./routes/customers.js');

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
customerLeakApi(app);

app.listen(config.port, function(){
    console.log(`listening http://localhost:${config.port}`)
});