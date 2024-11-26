const fs = require('fs')
const {client} = require('./databaseClient')
function set_data(data, path) {

   let x = fs.writeFileSync(__dirname + path, JSON.stringify(data))

   let result = data[data.length-1];



   client.connect();

   // client.query(`select * from cart`,(err,data)=>{
   //     console.log(data);

   // })

   client.query(`insert into users(name,email,password,isverified) values('${result.name}','${result.email}','${result.password}',${result.isVerified})`, (err, data) => {



   })


}

module.exports = { set_data };