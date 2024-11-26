const { Client } = require('pg');
const { get_data } = require('./services/get_data');
let result = JSON.parse(get_data('/Users/adarshpandey/Desktop/Node/Assignment10/services/product.txt'));

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: '123',
    database: 'adarsh'
})

client.connect();

// client.query(`select * from cart`,(err,data)=>{
//     console.log(data);

// })
console.log(result);

for (let i = 0; i < result.length; i++) {
    client.query(`insert into products(img,productname,price,description) values(${result[i].img},'${result[i].product_name}',${parseInt(result[i].price)},'${result[i].description}')`, (err, data) => {
        console.log(err);


    })
}

