const express = require('express');
const router = express.Router();

const multer = require('multer');

// const storage = multer.diskStorage({
//     destination:function(req,file,abc)
//     {
//         if(req.path === '/addProduct'){
//             abc(null,"/uploads");
//         }
//     },
//     filename:function(req,file,as){
//         as(null,file.originalname)
//     }

// })

// const uploads = multer({storage:storage,})

const uploads = multer({dest:'uploads'});



//const uploads = multer({dest:'uploads'});

const addProduct = require('../controllers/addProduct');

router.route('/addProduct').post(uploads.single('image'),addProduct.post);

//router.route('/addProduct').post(addProduct);
module.exports = router;