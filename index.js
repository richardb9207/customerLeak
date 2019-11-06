const express = require('express');
const app = express();
const { config }= require('./config/index');
const customerLeakApi = require('./routes/customers.js');

app.use(express.json());
customerLeakApi(app);

app.listen(config.port, function(){
    console.log(`listening http://localhost:${config.port}`)
});