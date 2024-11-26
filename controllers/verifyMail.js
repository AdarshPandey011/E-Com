// const {get_data} = require("../services/get_data")
// const {set_data} = require("../services/set_data")

const { get_data } = require("../services/database/get_data")
const { set_data } = require("../services/database/set_data")
const { client } = require('../services/databaseClient');
const jwt = require('jsonwebtoken');


const verifyMail = (req, res) => {
    
    const { token } = req.params;

    
    let user = get_data('*', 'users', 'id', `${token}`, (data) => {
        const redirectPage = req.params.redirectPage;
        if (data[0].id == token) {
            data[0].isVerified = true;

            client.query(`update users set isverified = true where id=${token}`, (err, d) => {
                req.session.is_logged_in = true;
                req.session.isVerified = true;
                // res.redirect("/home");
                
                if (redirectPage) {
                    req.session.is_logged_in = false;
                    //res.redirect('/' + redirectPage);

                    jwt.sign(data[0],'secret-key',(err,token)=>{

                        // jwt.verify(data,'secret-key',(e,token)=>{
                        //   console.log('asdfa',token);
                        // })
          
                        res.status(200).send(JSON.stringify({token:token}))
                      })

                    //res.json({x:'verified'});
    
                } else {
                    // req.session.isVerified = true;
                    jwt.sign(data[0],'secret-key',(err,token)=>{

                        // jwt.verify(data,'secret-key',(e,token)=>{
                        //   console.log('asdfa',token);
                        // })
          
                        res.status(200).send(JSON.stringify({token:token}))
                      })
                   // res.json({x:'verified'});
                   // res.redirect('/home');
                }
            })
        }
    })





}


module.exports = { verifyMail };