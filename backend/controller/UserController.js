const User = require("../model/UserModel");
const bcrypt = require('bcrypt');

const register = (req, res) => {

    User.findOne({email: req.body.email})
        .then(data => {
            if(data){
                res.send({status: false, message: "User Already Exist"});
            }else{
                const newUser = new User({
                    email: req.body.email,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    dateOfBirth: req.body.dateOfBirth,
                    password: req.body.password
                });
                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(newUser.password, salt, (error, encrypt) => {
                        newUser.password = encrypt;
                        newUser.save()
                            .then(data => {
                                res.json({status: true, message: "User Added"})
                            })
                            .catch(error => console.log(error));
                    });
                });
            }
        })
        .catch(err => {
            res.send({status: null, message: err});
        });
}

const login = (req, res) => {
    User.findOne({email: req.body.email}).exec()
        .then(user => {
            if(user){
                if(validPassword(req.body.password, user.password)) {
                    res.send({status: true, message: "Success"});
                }else{
                    res.send({status: false, message: "Invalid Credentials"});
                }
            }else{
                res.send({status: false, message: "Invalid Credentials"});
            }
        })
        .catch(err => {
            res.send({status: null, message: err});
        })
}

const validPassword = (pass, password) => {
    return bcrypt.compareSync(pass, password);
}

module.exports.register = register;
module.exports.login = login;
