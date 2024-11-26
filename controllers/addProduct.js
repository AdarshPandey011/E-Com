
const multer = require('multer');
const upload = multer({dest:'uploads'})
const Product = require('../services/database/addProduct');
const post = (req,res)=>{
  
   if(req.file==undefined){
        Product.addProduct(req.body,null,(err,data)=>{
          if(err){
               res.send({error:'Enter Correct Details'})
          }
          else{
               res.send({success:'Added Successfully'})
          }

        });

   }
   else{
//    Product.addProduct(req.body,req.file.filename);
     Product.addProduct(req.body,req.file.filename,(err,data)=>{
          if(err){
               res.send({error:'Enter Correct Details'})
          }
          else{
               res.send({success:'Added Successfully'})
          }
     });

   }
//     res.redirect('/home');
}

// post('/addProduct',upload.single('file'),(req,res)=>{
//     console.log(req.file.path);
//     //res.end('file success');
//     writeFile(req.file.path,function(){
//         res.send('success')
//     }) 

//     readFile(function(data){
//         temp = data;
//     })
// })

// function addProduct(req,res){
//     const upload = multer({dest:'uploads/'});

   

//     console.log(req.body);

// }

module.exports = {post}