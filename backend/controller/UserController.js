const User = require("../model/UserModel");
const bcrypt = require('bcrypt');

const register = (req, res) => {
    User.findOne({email: req.body.email})
        .then(data => {
            if (data) {
                res.send({status: false, message: "User Already Exist"});
            } else {
                const newUser = new User({
                    email: req.body.email,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    gender: req.body.gender,
                    dateOfBirth: req.body.dateOfBirth,
                    userType: req.body.userType,
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

const getProfile = async (req, res) => {
    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            res.json({status: true, user: user});
        }else{
            res.json({status: false, message: "Not Found"})
        }
    });
}

const updatePassword =  (req, res) => {

    User.findOne({email: req.body.email})
        .then(user => {
            if (user) {
                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(req.body.password, salt, (error, encrypt) => {
                        User.updateOne({email: req.body.email}, {password: encrypt}, function (err, result) {
                            if (err) {
                                res.json({status: false, message: "Updated failed"});
                            } else {
                                res.json({status: true, message: "Updated successful"});
                            }
                        });
                    });
                });
            } else {
                res.json({status: false, message: "Not Found"})
            }
        })
        .catch(err => {
            res.send({status: null, message: err});
        });
}

const updateLocation=  (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (user) {
                User.updateOne({ email: req.body.email }, { location:  req.body.location }, function(err, result) {
                    if (err) {
                        res.json({status: false, message: "Updated failed"});
                    } else {
                        res.json({status: true, message: "Updated successful"});
                    }
                });
            } else {
                res.json({status: false, message: "Not Found"})
            }
        })
        .catch(err => {
            res.send({status: null, message: err});
        });
}

const updateSubject =  (req, res) => {

    User.findOne({email: req.body.email})
        .then(user => {
            if (user) {
                User.updateOne({ email: req.body.email }, { location:  req.body.subject }, function(err, result) {
                    if (err) {
                        res.json({status: false, message: "Updated failed"});
                    } else {
                        res.json({status: true, message: "Updated successful"});
                    }
                });
            } else {
                res.json({status: false, message: "Not Found"})
            }
        })
        .catch(err => {
            res.send({status: null, message: err});
        });
}

const login = (req, res) => {
    User.findOne({email: req.body.email}).exec()
        .then(user => {
            if (user) {
                if (validPassword(req.body.password, user.password)) {
                    const fullName = user.firstName + " " + user.lastName;
                    res.send({status: true, message: "Success", userType: user.userType, email: user.email, fullName: fullName});
                } else {
                    res.send({status: false, message: "Invalid Credentials"});
                }
            } else {
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
module.exports.updatePassword = updatePassword;
module.exports.updateLocation = updateLocation;
module.exports.updateSubject = updateSubject;
module.exports.getProfile = getProfile;
