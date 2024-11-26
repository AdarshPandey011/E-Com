
const product = require('../services/database/addProduct')
const client = require('../services/databaseClient')
function editProduct(req, resp) {
    
    if (req.file == undefined) {
      
        product.editProduct(req.body, null, (req, res) => {

            // resp.redirect('/adminPannel');
            resp.send({})

        })
    }
    else {
        // console.log(req.body)
      
        product.editProduct(req.body, req.file.filename, (req, res) => {
            // resp.redirect('/adminPannel');
            resp.send({})
        })
    }

}

function get(req,res){
    res.redirect('/home');
}


module.exports = { editProduct,get }