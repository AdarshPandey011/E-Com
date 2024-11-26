const { send } = require("express/lib/response");
const { get_data } = require("../services/database/get_data");
const jwt = require('jsonwebtoken');


const { send_mail } = require("../services/send_mail")
let redirectPage;
const forgotPassword = (req, res) => {

    if (req.session.is_logged_in || req.session.admin_logged_in) {
        res.redirect('/home');
        return
    }
    res.render("forgotPassword.ejs", { error: null });
}

const post = (req, res) => {

    get_data('*', 'users', 'email', req.body.email, (data) => {
        
        if(data.length == 0){
            res.send({error:`User Doesn't Exist`})
            return
        }

        if (data[0].email === req.body.email) {

            jwt.sign(data[0], 'secret-key', (err, user) => {

                //    req.session.isVerified = true;
                if(data[0].email == 'admin'){
                    redirectPage = 'admin'
                }
                else{
                    redirectPage = 'cust'
                }
                req.session.user = data[0];
                let html = `<a href=http://localhost:5173/verify/${user}/${redirectPage}>click here to verify</a>`;
                send_mail(data[0], data[0].id, html)
                //    res.render('forgotPassword', {error:"*verification email sent"});
                res.status(200).send(JSON.stringify({ success: 'email sent please verify' }))

                return
            })


        } else {
            // res.render("forgotPassword",{error:"*Email Doesn't exist"});
            res.status(200).send(JSON.stringify({ error: "*Email Doesn't exist" }))
            return
            //  res.redirect('/');
            res.end()
        }


    })


}

module.exports = { forgotPassword, post }