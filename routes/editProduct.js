const express = require('express');
const router = express.Router();

const multer = require('multer');

// const storage = multer.diskStorage({
//     destination:function(req,file,abc)
//     {
//         if(req.path === '/editProduct'){
//             abc(null,"uploads");
//         }
//     },
//     filename:function(req,file,as){
//         as(null,file.originalname)
//     }

// })

// const uploads = multer({storage:storage,})



const uploads = multer({dest:'uploads'});

const editProduct = require('../controllers/editProduct');

router.route('/editProduct').post(uploads.single('image'),editProduct.editProduct).get(editProduct.get);


// router.route('/editProduct').get(editProduct.remove)

//router.route('/addProduct').post(addProduct);
module.exports = router;
