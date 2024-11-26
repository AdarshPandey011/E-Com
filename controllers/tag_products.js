const fs = require('fs');
let count = 0;
const { get_data } = require("../services/get_data")
const { get_products } = require('../services/get_products');
const cartFun = require('../services/database/cartFun')
const jwt = require('jsonwebtoken');



const tag_products = (req, res) => {

    get_products((products) => {
        

        // console.log(JSON.parse(cart_data),req.session.user)
        // let cart_data = get_data("/Users/adarshpandey/Desktop/Node/Assignment10/services/cartData.txt");
        //let cart = JSON.parse(cart_data)
        let id;

        // if(req.session.user ==undefined){
        //     id=-1;
        // }
        // else{
        //  id = req.session.user.id;
        // }

       // console.log(req.body);
        jwt.verify(req.body.token, 'secret-key', (x, y) => {

            // jwt.verify(data,'secret-key',(e,token)=>{
            //   console.log('asdfa',token);
            // })
            id = y.id;
            if (req.body.data == 2) {
                if (count - 10 >= 0) {
                    count -= 10;
                }
                else {
                    count = 0;
                }
            }
    
            if (req.body.data == 3) {
              
                count = 0;
            }
            //count = 0;
            // res.status(200).send(JSON.stringify({token:data}))



            cartFun.getById(id, (data) => {
                // console.log(data);
                let x = [], i = count;
                while (i < count + 5 && i < products.length) {
                    x.push(products[i]);
                    i++;
                }
                if (count + 5 <= products.length)
                    count += 5;
                else {
                    count = products.length;
                }
                //     let p = {cart:cart[user_id]};
                //    // console.log(p,"efw",user_id);
                // console.log(data)

               
                res.send({ x: products, cart: data })
            })
            //console.log(data[user_id])

            // fs.readFile("./services/product.txt", 'utf-8', (err, data) => {


        });
    })


    // })

}

function get(req, res) {
    res.redirect('/home')

}

module.exports = { tag_products, get }