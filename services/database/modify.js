
const { client } = require('../databaseClient');

function modify(table, set, info,pk,con,callback) {
    //client.connect();
    //  console.log(table, set, info,pk,con,"!!!!!")
    client.query(`update ${table} set ${set} = '${info}' where ${pk}='${con}'`, (err, data) => {
        // console.log(err);
        callback();
    })

}
module.exports = { modify };