
function checkSpecial(data) {

    var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    if (data.match(format)) {
        return true;
    } else {
        return false;
    }
}

function checkUpper(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].toUpperCase() == data[i] && data[i] != ' ') {
            return true
        }
    }
    return false;
}

function checkLower(data) {

    for (let i = 0; i < data.length; i++) {
        if (data[i].toLowerCase() == data[i] && data[i] != ' ') {
            return true
        }
    }
    return false;

}

function checkNumber(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] >= "A" && data[i] <= "z" && data[i] == ' ') {
        }
        else {

            return true;
        }
    }
    return false
}




const CheckPassword = (req, res) => {

    const password = req.body.password;
    const confirm = req.body.confirm;

    if (password.length >= 8 && password === confirm) {

        if (checkUpper(password) && checkLower(password) && checkNumber(password)) {
            res.status(200).json()
        }
    }
    else {
        res.status(401).json({ error: 'Kindly entern password according to rule' })
    }


}



module.exports = { CheckPassword }