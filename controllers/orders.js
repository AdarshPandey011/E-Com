const { JsonWebTokenError } = require('jsonwebtoken');
const { client } = require('../services/databaseClient');
const jwt = require('jsonwebtoken')

const post = (req, res) => {
     console.log(req.body)

    jwt.verify(req.body.token, 'secret-key', (err, user) => {
        console.log(req.body.data)
        let cart = req.body.data;
        for (let i = 0; i < cart.length; i++) {

            client.query(`insert into orders(userid,productid,quantity,transactionid) 
            values(${user.id},${cart[i].productid},${cart[i].quantity},'${req.body.tid}')`, (err, data) => {
            
                console.log(err);

            })

        
        }

        

    })


}

module.exports = { post }