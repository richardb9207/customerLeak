const dataIni = [
    {
"clientNumber": "123123",
"document": {
"type": "1",
"number": 123123123,
"expeditionDate": "12/12/1997"
},
"fullName": "pepe",
"email": "david@asdas.com",
"phone": 312312312312,
"address": "cra 12 # 12 - 12",
"pqrs": [
{
"radicationNumber": "123123",
"radicationType": "P",
"radicationDate": "12/12/2019",
"reportedProduct": {
"productType": "CC",
"productName": "CTA CORRIENTE"
},
"description": "ppp asdasd  asdasda",
"responsibleArea": "CANALES",
"attentionDate": "12/12/2020"
},
{
"radicationNumber": "123123",
"radicationType": "P",
"radicationDate": "12/12/2019",
"reportedProduct": {
"productType": "CC",
"productName": "CTA CORRIENTE"
},
"description": "ppp asdasd  asdasda"
}
],
"personalProducts": [
{
"productNumber": "PRESTAMO",
"productType" : {
"id": "PR",
"description" : "CREDITO HIPOTECARIO"
},
"openingDate": "12/12/2000",
"status": "c",
"balances": {
"originalAmount": "120000000",
"outstandingBalance": "123123",
"interestPaid": "123123"
},
"defaultIndicatorProduct": "",
"blackberryDays": "",
"pointsBalance": ""

}
],
"channels": [
{
"channelName":"B MOVIL",
"channelUsage": "1000",
"amount": "150000000"
},
{
"channelName":"WALLET",
"channelUsage": "10",
"amount": "0"
},
{
"channelName":"BBVA NET",
"channelUsage": "3000",
"amount": "1500000"
}
]
}];

module.exports = {
    dataIni
}
