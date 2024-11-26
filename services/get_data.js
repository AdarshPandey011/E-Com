const { json } = require('body-parser');
const fs = require('fs')

function get_data(path) {

   let x =  fs.readFileSync(path)  
   //console.log(x);
    return x ;
}

module.exports = { get_data };