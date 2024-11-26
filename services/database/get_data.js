
const { client } = require('../databaseClient');

function get_data(col, table, match, info, callback) {
    //client.connect();
    // console.log(col, table, match, info)
    console.log(info);
    
    client.query(`select ${col} from ${table} where ${match} = '${info}'`, (err, data) => {
        //console.log(data.rows);
      //  console.log(data.rows)
        if (data.length == 0) {

            callback(data);
        }
        else {
            callback(data.rows)
            //console.log(data.rows, 'sdfsf')
        }
    })
}


module.exports = { get_data };