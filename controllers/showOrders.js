const { JsonWebTokenError } = require('jsonwebtoken');
const { client } = require('../services/databaseClient');
const jwt = require('jsonwebtoken')

const post = (req, res) => {
    // console.log(req.body)

    jwt.verify(req.body.token, 'secret-key', (err, user) => {
        let cart = req.body.data;

        if (user.email === 'admin@gmail.com') {

            client.query(`select * from orders o inner join products
            p on o.productid = p.productid `, (err, data) => {
                res.send({ data: data.rows })
                console.log(data.rows)

            })

        }
        else {

            client.query(`select * from orders o inner join products
        p on o.productid = p.productid where userid = ${user.id}`, (err, data) => {
                res.send({ data: data.rows })


            })
        }


    })


}

module.exports = { post }