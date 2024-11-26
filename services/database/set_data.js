
const { client } = require('../databaseClient');

function set_data(col,table,info,callback) {

   // console.log(col,table,info)
    client.query(`insert into ${table} (${col}) values (${info})`,(err,data)=>{ 
        callback(err,data);
    })
}
module.exports = { set_data };