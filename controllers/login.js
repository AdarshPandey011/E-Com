const req = require("express/lib/request");
const jwt = require('jsonwebtoken');
const { get_data } = require("../services/database/get_data");

const login = function (req, res) {
  console.log(req.body);
  get_data('*', 'users', 'email', req.body.email, (data) => {

    if (data.length == 0) {
      // res.render("index", { error: "*User Doesn't Exist" })
      res.status(200).send(JSON.stringify({ error: "*User Doesn't Exist"}));

    }

    else {


      if (data[0].email === req.body.email) {

        if (data[0].password === req.body.password) {
          if(data[0].email == 'admin@gmail.com'){
            req.session.admin_logged_in = true;
            req.session.user = data[0];
            req.session.adminVerified = true;
            //res.render('admin',{user:`${data[0].name}`});
            jwt.sign(data[0],'secret-key',(err,user)=>{

             

              res.status(200).send(JSON.stringify({token:user,role:'admin',name:data[0].name}))
            })

            return;
          }
          if (data[0].isverified) {
            req.session.is_logged_in = true;
            req.session.user = data[0];
            req.session.isVerified = true
            // res.render('home',{user:array[i].name});
            //res.redirect('/home');

            jwt.sign(data[0],'secret-key',(err,user)=>{

              // jwt.verify(data,'secret-key',(e,token)=>{
              //   console.log('asdfa',token);
              // })
              // console.log('!!!!!!1',data);
              

              res.status(200).send(JSON.stringify({token:user,role:'cust',name:data[0].name}))
            })

           // res.json(data[0]);

            return
          }
          else {
            // res.render("index", { error: "*Email verification pending..." })
            res.status(200).send(JSON.stringify({ error: "*Email verification pending..."}));

            return;
          }
        }
        else {
          //res.render("index", { error: "*wrong password" })
          res.status(200).send(JSON.stringify({ error: "*wrong password"}));

          return
        }

      }
      

      //res.render("index", { error: "*User Doesn't Exist" })//commented
      // res.end("signup first")
      res.status(200).send(JSON.stringify({ error: "*User Doesn't Exist"}));
      return
    }


  })

}

function get(req,res){
  
  res.redirect('/home');
  
}

module.exports = { login,get };