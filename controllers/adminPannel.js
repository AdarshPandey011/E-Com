function adminPannel(req,res){
    if(req.session.is_logged_in){
        res.redirect('/home');
    }
    else{
    res.render('adminProducts');
    }
}



module.exports = {adminPannel}