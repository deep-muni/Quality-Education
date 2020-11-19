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
                    // education: req.body.education,
                    // country: req.body.country,
                    // address: req.body.address,
                    // subject: req.body.subject
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

const getProfile = async (req, res, next) => {
    console.log("get profile.")
    try {
        User.findOne({email: req.body.email}).then(user => {
            console.log(user);
            if (user) {
                return res.json(user);
            }
            return res.status(400).send({"error": "user not found"});
        });
    } catch (error) {
        next(error);
    }
}


const updateProfile = async (req, res, next) => {
    console.log("updating profile")
    try {
        let email_id = req.body.email;
        let user = await User.findOne({
            where: {
                email: email_id
            }
        });

        if (user === null) {
            res.send("fail");
        } else {
            user = await User.update(
                {
                    where: {
                        email: email_id,
                    },
                }
            ).then(() => {
                console.log("Profile updated!");
            });
            res.status(200);
            res.send("success");
        }
        if (user === null) {
            res.send("fail");
        } else {
            user = User.update(
                {
                    where: {
                        email: email_id,
                    },
                }
            ).then(() => {
                console.log("Profile updated!");
            });
            res.status(200);
            res.send("success");
        }
    } catch (error) {
        next(error);
    }
}

const deleteProfile = async (req, res, next) => {
    console.log("deleting profile");
    try {
        let email_id = req.body.emailid;
        let user = await User.findOne({
            where: {email: email_id}
        });

        if (user === null) {
            res.send("fail");
        } else {
            user = await User.deleteOne({
                    where: {
                        email: email_id
                    }
                }
            ).then(() => {
                console.log("profile deleted");
            });
            res.status(200);
            res.send("success");
        }
    } catch (error) {
        next(error);
    }
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
module.exports.updateProfile = updateProfile;
module.exports.getProfile = getProfile;
module.exports.deleteProfile = deleteProfile;
