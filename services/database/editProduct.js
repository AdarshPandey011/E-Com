const {client} = require('../databaseClient')

function editProduct(product,filename){

    client
    .query(`insert into products(img,productname,price,description,stock,disabled) values
    ('${filename}','${product.productname}',${product.price},'${product.description}',${product.quantity},
    false
    )`,(err,data)=>{
        console.log(err)
    })
}
module.exports = {editProduct}