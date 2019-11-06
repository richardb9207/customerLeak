const express = require('express');
const CustomerLeakServices = require('../services/customer');

function customerLeakApi(app){
    const router = express.Router();
    app.use("/api/data", router);

    const customerLeakServices = new CustomerLeakServices();
    router.get("/", async function(req, res, next){
        const { tags } = req.query;
        try{
            const data = await customerLeakServices.getData({tags});
            res.status(200).json({
                data: data,
                message: 'leads listed'
            })
        }catch(err){
            next(err);
        }
    })
    router.post("/", async function(req, res, next){
        const { body: data } = req;
        try{
            const createDataId = await customerLeakServices.createData({ data });
            res.status(201).json({
                data: createDataId,
                message: 'lead create'
            })
        }catch(err){
            next(err);
        }
    })
}

module.exports = customerLeakApi;