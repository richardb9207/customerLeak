// const { dataIni } = require('../utils/mocks/data');

const MongoLib = require('../lib/mongo')

class CustomerLeakServices{
    constructor(){
        this.collection = "customerLake";
        this.mongoDB =  new MongoLib();
    }
    async getData(query){
        const leads = await this.mongoDB.getAll(this.collection,query);
        return leads || [];
    }
    async createData({ data }){
        const lead = await this.mongoDB.create(this.collection,data);
        return lead;
    }
}

module.exports = CustomerLeakServices;