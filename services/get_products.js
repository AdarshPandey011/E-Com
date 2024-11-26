const {client} = require('../services/databaseClient');

client.connect();

// client.query(`select * from cart`,(err,data)=>{
//     console.log(data);

// })
const get_products = (callback)=>{

client.query(`select * from products where disabled=false order by productid `, (err, data) => {

   callback(data.rows);
})
}

module.exports = {get_products};


