const { urlencoded } = require('body-parser');
const express = require('express');


const app = express();
const cors = require("cors");
app.use(cors());

let session = require('express-session')
 const products_routes = require("./routes/products")
 const tag_products = require("./routes/tag_products")
 const verifyMail = require("./routes/verifyMail")
 const forgotPassword = require("./routes/forgotPassword");
 const cart = require("./routes/cart");
 const addToCart = require("./routes/addToCart");
 const changeQuantity = require("./routes/changeQuantity");
 const addProduct = require('./routes/addProduct');
 const adminPannel = require('./routes/adminPannel')
 const editProduct = require('./routes/editProduct');
 const deleteProduct = require('./routes/deleteProduct')


const fs = require('fs');
let count = 0;

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
}))


app.use(express.static(__dirname));
app.use(express.static('public'));
app.use(express.static('uploads'));//htana hai baad mei
app.use(express.json())
app.use(urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(forgotPassword);
app.use(addToCart);
app.use(cart)
app.use(changeQuantity);
app.use(addProduct);
app.use(adminPannel);
app.use(editProduct);
app.use(deleteProduct)

const login = require("./routes/login.js")
const signin = require("./routes/signin")
const home = require("./routes/home")
const changePassword = require("./routes/changePassword")
const orders = require('./routes/orders')
const showOrders = require('./routes/showOrders');
const razorPay = require('./routes/razorPay');

// const get = require("./routes/get")//added

//console.log(submit,products_routes)

// app.use("/",products_routes);
// app.use("/home",products_routes)

 app.use(login);
 app.use(signin);
 app.use(home)
 app.use(tag_products)
 app.use(verifyMail)
app.use(changePassword);
app.use(orders);
app.use(showOrders);
app.use(razorPay);

//  app.use(get);//added


app.get('/',(req,res)=>{

    if(req.session.is_logged_in){
        res.redirect('/home');
    }
    else
    res.render('index',{error:null})
     //res.render('admin',{user:'Admin'});
})


// app.post('/submitLoginForm',function(req,res){
//    console.log(req.body)

//     res.send();
// })

 


// app.get('/signin',function(req,res){
//     res.render('signin');
//     fs.readFile('/db.txt','utf-8',(err,data)=>{
//         let array;
//         if(data.length == 0){
//             array = [];  
//         }
//         else{
//             array = data;
//         }
//         array.push(req.body);
//         console.log(array);

//     })
// })

app.get('/signin_menu',function(req,res){
    if(req.session.is_logged_in){
        res.redirect('/home')
    }
    else
    res.render('signin',{error:null});
    
})





app.get('/switch',function(req,res){
    res.render('index',{error:null});
})


app.post('/check',(req,res)=>{
    console.log(req.body);

})

app.get('/logout',(req,res)=>{
    req.session.destroy()
    // res.render("index",{error:null});
    res.redirect('/');
})

// app.post("/products",(req,res)=>{
//     if(req.body.data == 2){
//         if(count-10>=0){
//             count -= 10;
//         }
//         else{
//             count = 0;
//         }
//     }

//     fs.readFile("./services/product.txt",'utf-8',(err,data)=>{
//         data = JSON.parse(data);
//         let x=[],i=count;
//         while(i<count+5 && i<data.length){
//             x.push(data[i]);
//             i++;
//         }
//         if(count+5<=data.length)
//         count += 5;

//         res.send(x)
       
//     })
// })

// app.get("/verify/:token",(req,res)=>{
//    // res.redirect("/home")
//    const {params} = req.params;
// })



app.listen(3002,()=>{
    console.log(`port started at 3002`);
})

