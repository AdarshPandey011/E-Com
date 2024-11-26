const { get_data } = require("../services/get_data")
const {client} = require('../services/databaseClient')
const fs = require('fs')
const cartFun = require('../services/database/cartFun');
const jwt = require('jsonwebtoken');

const cart = (req, res) => {

   if(req.session.admin_logged_in){
      // res.render('admin',{user:req.session.user.name});
      res.redirect('/home');
      return;
  }


   res.render("cart",{user:req.session.user.name});
   //console.log(JSON.parse( cartData))
}

const cart_products = (req,res)=>{
     // let id = req.session.user.id;
      
      jwt.verify(req.body.token,'secret-key',(err,user)=>{

         cartFun.getById(user.id,(data)=>{
            if(data.length == 0){
               res.send(JSON.stringify(data));
              
            }
            else{
                res.send(JSON.stringify(data));
             
            }
         });

        
       })
     
      
//    let cartData = JSON.parse(get_data("/Users/adarshpandey/Desktop/Node/Assignment10/services/cartData.txt"));
//    let products = JSON.parse(get_data("/Users/adarshpandey/Desktop/Node/Assignment10/services/product.txt"));
//    let user_id = req.session.user.id;
//    let usersData = [];
//   // console.log(cartData,products)
//    if(cartData[user_id] == undefined){
//       res.send()
//    }
//   // console.log(cartData[user_id])
//    else{
//       cartData = cartData[user_id]
//       for(let i=0;i<products.length;i++){
//          if(cartData[products[i].id] != undefined){
//             products[i].quantity = cartData[products[i].id].quantity;
//             usersData.push(products[i])
            
            
//          }
//       }
//       res.send( JSON.stringify(usersData));
//    }

}
module.exports = { cart,cart_products };