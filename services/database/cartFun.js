const { client } = require('../databaseClient')

function getById(id, callback) {
    client.query(`select p.*,c.quantity from products p,cart c where c.id = ${id} and p.productid = c.productid`, (err, data) => {

        if(data==undefined){
            callback([])
        }
        else{
        callback(data.rows)}
    })
}

function delById(id, productid) {

    client.query(`delete from cart where id=${id} and productid=${productid}  `, (err, data) => {
        // callback(data.rows)
    })
    
}

// function newEntry(values,callback){
//     client.query(`insert into cart values(${values})  `, (err, data) => {
//          callback(err)
//     })
// }

function newEntry(values,callback){
    client.query(`insert into cart values(${values})  `, (err, data) => {
         callback(err)
    })
}


function increaseQuantity(id,productid,callback){

    client.query(`update  cart set quantity=quantity+1, stock=stock-1 where id=${id} and productid=${productid} and stock>=1`, (err, data) => {
        if(err){
            //console.log(err)
            callback(err);
        }else{
            callback(null);
        }
   })

}

function decreasesQuantity(id,productid,callback){

    client.query(`select quantity from cart where id=${id} and productid=${productid}`, (err, data) => {
        
        if(data.rows[0].quantity == 1){
            callback({dec:0});
        }
        else{
        client.query(`update  cart set quantity=quantity-1,stock=stock+1 where id=${id} and productid=${productid} `, (err, data) => {
            if(err){
                callback(err);
            }else{
                callback({dec:1});
            }
            return;
       })
    }
        
   })

 

}

module.exports = { getById, delById, newEntry , increaseQuantity, decreasesQuantity }