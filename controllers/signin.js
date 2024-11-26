const express = require('express');
// const app = express();
const fs = require('fs')
// const { get_data } = require("../services/get_data");
const { send } = require('process');
const { send_mail } = require("../services/send_mail");
const { get_data } = require("../services/database/get_data");
const { set_data } = require("../services/database/set_data");



const signin = function (req, res) {
    let array, data;
    get_data('*', 'users', 'email', req.body.email, (data) => {

       // data = data;

        if (data.length == 0) {
            req.body.isVerified = false;

            
            set_data('name,email,password', 'users', `'${req.body.name}','${req.body.email}','${req.body.password}'`, () => {
                
                req.session.user = req.body;
                
                get_data('id', 'users', 'email', req.body.email, (token) => {
                    let html;
                    req.body.id = token[0].id;
                    html = `<a href="http://localhost:5173/verify/${req.body.id}">click here to verify</a>`
                    send_mail(req.body, req.body.id, html);
                    //res.render('signin', { error: "Please Veify Your Email..." })
                    res.send({error:'Please Veify Your Email...'})
                })
                return

            });

        }
        else if (data[0].email === req.body.email) {
           // res.render('signin', { error: "*email already exists" })
           res.send({error:'*email already exists'})
            return
        }

    });



}

const get = function (req, res) {

    if (req.session.is_logged_in) {

        res.redirect('home')
    }
    else {
        res.render('index', { error: null });
    }

}
module.exports = { signin, get };
