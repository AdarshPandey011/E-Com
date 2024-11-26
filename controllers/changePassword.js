const jwt = require('jsonwebtoken');
const changePassword = (req, res) => {
    // res.render("changePassword");

    if (req.session.isVerified || req.session.adminVerified) {
        res.render("changePassword");
    }
    else {
        res.redirect('/')
    }

}

const post = (req, res) => {
    console.log(req.body);

    jwt.verify(req.body.token, 'secret-key', (err, user) => {

        const { get_data } = require("../services/database/get_data");
        const { modify } = require("../services/database/modify");
        get_data('*', 'users', 'email', user.email, (data) => {
            // console.log(data,req.session.user,req.body);
          
        
            if (data[0].id == user.id) {
                //data[0].password = req.body.password;
                modify('users', 'password', `${req.body.data}`, 'id', user.id, () => {

                    res.status(200).send()
                });
            }
        })
    })


}
module.exports = { changePassword, post }