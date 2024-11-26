const {client} = require('../databaseClient')

function addProduct(product,filename,callback){

    client
    .query(`insert into products(img,productname,price,description,stock,disabled) values
    ('${filename}','${product.productname}',${product.price},'${product.description}',${product.quantity},
    false
    )`,(err,data)=>{
        callback(err,data)
        
        
    })
}



function editProduct(product,filename,callback){
    let resp;
    // console.log(filename)
    //  console.log(product.productname,product.price,product.stock,product.description,product.productid)
    if(filename==null){
         resp = {
            text : `update products set productname='${product.productname}',price=${product.price},stock=${product.quantity},
            description='${product.description}' where productid=${product.productid}`
        }
    }
    else{

         resp = {
            text : `update products set productname='${product.productname}',price=${product.price},stock=${product.quantity},
            description='${product.description}',img='${filename}' where productid=${product.productid}`
        }

    }
    client
    .query(resp,(err)=>{
        if(err){
            console.log(err)
        }
        callback();
    })


}



module.exports = {addProduct,editProduct};