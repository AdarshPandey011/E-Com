const Razorpay = require('razorpay');
const { client } = require('../services/databaseClient')

var razorpay = new Razorpay({
    key_id:'rzp_test_O4btcvQbrjrjsR',
    key_secret:'rLYsz7kJ4hd6YnluXvcHXTwf'
}); 

const post = async(req,res)=>{
    let total=0;
    let cart = req.body.data;
    // res.send({data:'hello'});
    

    for(let i=0;i<cart.length;i++){
        total += cart[i].price * cart[i].quantity;

        client.query(`update products set stock=stock-${cart[i].quantity} where productid = ${cart[i].productid}`,(err,data)=>{
            console.log(err)
        })
       
    }
    total = total*100;

    // res.status(200).json({msg:"fdsqsafd"});
    
    const obj = await razorpay.orders.create({
        amount:total,
        currency:'INR',
        receipt:'Hello',
        payment_capture:1,
        
    })

    res.send({data:total,id:obj.id});


 
 };
 
 module.exports = {post}