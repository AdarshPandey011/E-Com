const home = function(req,res,next){

    if(req.session.admin_logged_in){
        res.render('admin',{user:req.session.user.name});
        return;
    }

    if(req.session.is_logged_in){
    //     const fs = require('fs');
    //    let data =  fs.readFileSync('./services/product.txt','utf-8');
       //console.log(JSON.parse(data));
       
         res.render('home',{user:req.session.user.name});
        // res.redirect('home',{user:req.session.user.name}) 

        // return;
        
    }
    else{
        res.redirect('/')
    }

}

module.exports = {home};