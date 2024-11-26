const { get_data } = require("../services/database/get_data");
const { set_data } = require("../services/database/set_data");
const { client } = require('../services/databaseClient');
const cartFun = require('../services/database/cartFun')
const jwt = require('jsonwebtoken')

const addToCart = (req, res) => {
    // let user = req.b.user;
    jwt.verify(req.body.token, 'secret-key', (e1, user) => {

        let productid = req.body.product;

        cartFun.getById(user.id, (data) => {

            for (let i = 0; i < data.length; i++) {
                if (data[i].productid == productid) {
                    cartFun.delById(user.id, productid);
                    res.send();
                    return;
                }
            }

            client.query(`select stock from products where productid=${productid}`,(err,stock) =>{
                let temp = stock.rows

                cartFun.newEntry(`${user.id},${productid},1,${temp[0].stock}`, (err) => {
                    res.send();
    
                })
            })



        })

    })
    // client.query(`select * from cart where id=${user.id} and productid=${id}`, (err, data) => {
    //     console.log(err);
    //     if (data.rows.length == 0) {
    //         console.log('saf', user)
    //         set_data('id,productid,quantity', 'cart', `${user.id},${id},${1}`, (e, d) => {

    //             console.log(e, 'dsa')
    //             res.end();

    //         })

    //     }
    //     else {
    //         client.query(`delete from cart where id=${user.id} and productid=${id}`,(e,d)=>{
    //             console.log()
    //             res.end()

    //         })

    //     }
    // })



}

function get(req, res) {
    res.redirect('/home');
}

module.exports = { addToCart, get }